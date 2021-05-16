import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import MafiaViews from './views/MafiaViews';
import DoctorViews from './views/DoctorViews';
import VeteranViews from './views/VeteranViews';
import VillagerViews from './views/VillagerViews';
import MafiaVoteViews from './views/MafiaVoteViews';
import DoctorVoteViews from './views/DoctorVoteViews';
import VeteranVoteViews from './views/VeteranVoteViews';
import VillagerVoteViews from './views/VillagerVoteViews';
import {renderDOM, renderView} from './views/render';
import * as backend from './build/index.main.mjs';
import * as reach from '@reach-sh/stdlib/ALGO';


const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', VarsayılanUcret: '1', standardUnit};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'ConnectAccount', ...defaults};
  }
  async componentDidMount() {
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({acc, bal});
    try {
      const faucet = await reach.getFaucet();
      this.setState({view: 'FundAccount', faucet});
    } catch (e) {
      this.setState({view: 'DeployerOrAttacher'});
    }
  }
  async fundAccount(fundAmount) {
    await reach.transfer(this.state.faucet, this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({view: 'DeployerOrAttacher'});
  }
  async skipFundAccount() { this.setState({view: 'DeployerOrAttacher'}); }
  selectMafia() { this.setState({view: 'Wrapper', ContentView: Mafia}); }
  selectDoctor() { this.setState({view: 'Wrapper', ContentView: Doctor}); }
  selectVeteran() { this.setState({view: 'Wrapper', ContentView: Veteran}); }
  selectVillager() { this.setState({view: 'Wrapper', ContentView: Villager}); }
  selectDeployer() { this.setState({view: 'Wrapper', ContentView: Deployer}); }
  selectMafiaVote() { this.setState({view: 'Wrapper', ContentView: MafiaVote}); }
  selectDoctorVote() { this.setState({view: 'Wrapper', ContentView: DoctorVote}); }
  selectVeteranVote() { this.setState({view: 'Wrapper', ContentView: VeteranVote}); }
  selectVillagerVote() { this.setState({view: 'Wrapper', ContentView: VillagerVote}); }
  render() { return renderView(this, AppViews); }
}

// ********************* DEPLOYER *********************** \\
class Deployer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'UcretBelirle'};
  }

  UcretiUygula(ucret) { this.setState({view: 'Deploy', ucret}); }
  async deploy() {
    const ctc = this.props.acc.deploy(backend);
    this.setState({view: 'Deploying', ctc});
    this.ucret = reach.parseCurrency(this.state.ucret); // UInt
    backend.Admin(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({view: 'WaitingForAttacher', ctcInfoStr});
  }

  async FinishGame (){
    await new Promise(resolveBitir =>{
      this.setState({view:"OyunuBitir",resolveBitir});
    });
  }

  DecideFinishGame (answer){
    this.state.resolveBitir(answer);
  }

  render() { return renderView(this, DeployerViews); }
}
// ********************* DEPLOYER *********************** \\


// ********************* MAFIA *********************** \\
class Mafia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach', previousMove: 0};
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.Mafia(ctc, this);
  }
  async makeMove (){
    await new Promise(resolveHamle =>{
      this.setState({view:"HamleYap",previousMove: this.state.previousMove,resolveHamle});
    });
  }

  DecideMakeMove(hamle){
    this.state.resolveHamle(hamle);
  }
  
  async result(hamle){
    this.setState({previousMove: hamle});
  }

  render() { return renderView(this, MafiaViews); }
}
// ********************* MAFIA *********************** \\


// ********************* DOCTOR *********************** \\
class Doctor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach', previousMove: 0};
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.Doctor(ctc, this);
  }
  async makeMove (){
    await new Promise(resolveHamle =>{
      this.setState({view:"HamleYap",previousMove: this.state.previousMove,resolveHamle});
    });
  }

  DecideMakeMove(hamle){
    this.state.resolveHamle(hamle);
  }
  
  async result(hamle){
    this.setState({previousMove: hamle});
  }

  render() { return renderView(this, DoctorViews); }
}
// ********************* DOCTOR *********************** \\


// ********************* VETERAN *********************** \\
class Veteran extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach', previousMove: 0};
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.Veteran(ctc, this);
  }
  async makeMove (){
    await new Promise(resolveHamle =>{
      this.setState({view:"HamleYap",previousMove: this.state.previousMove,resolveHamle});
    });
  }

  DecideMakeMove(hamle){
    this.state.resolveHamle(hamle);
  }
  
  async result(hamle){
    this.setState({previousMove: hamle});
  }

  render() { return renderView(this, VeteranViews); }
}
// ********************* VETERAN *********************** \\


// ********************* VILLAGER *********************** \\
class Villager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach', previousMove: 0};
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.Villager(ctc, this);
  }
  async makeMove (){
    await new Promise(resolveHamle =>{
      this.setState({view:"HamleYap",previousMove: this.state.previousMove,resolveHamle});
    });
  }

  DecideMakeMove(hamle){
    this.state.resolveHamle(hamle);
  }
  
  async result(hamle){
    this.setState({previousMove: hamle});
  }

  render() { return renderView(this, VillagerViews); }
}
// ********************* VILLAGER *********************** \\


// ********************* MAFİA VOTE *********************** \\
class MafiaVote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach', previousMove: 0};
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.Mafia(ctc, this);
  }
  async getVote (){
    await new Promise(resolveHamle =>{
      this.setState({view:"Oylama Yap",previousMove: this.state.previousMove,resolveHamle});
    });
  }

  DecideMakeMove(hamle){
    this.state.resolveHamle(hamle);
  }
  
  async result(hamle){
    this.setState({previousMove: hamle});
  }

  render() { return renderView(this, MafiaVoteViews); }
}
// ********************* MAFİA VOTE *********************** \\


// ********************* DOCTOR VOTE *********************** \\
class DoctorVote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach', previousMove: 0};
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.Doctor(ctc, this);
  }
  async getVote (){
    await new Promise(resolveHamle =>{
      this.setState({view:"Oylama Yap",previousMove: this.state.previousMove,resolveHamle});
    });
  }

  DecideMakeMove(hamle){
    this.state.resolveHamle(hamle);
  }
  
  async result(hamle){
    this.setState({previousMove: hamle});
  }

  render() { return renderView(this, DoctorVoteViews); }
}
// ********************* DOCTOR VOTE *********************** \\


// ********************* VETERAN VOTE *********************** \\
class VeteranVote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach', previousMove: 0};
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.Veteran(ctc, this);
  }
  async getVote (){
    await new Promise(resolveHamle =>{
      this.setState({view:"Oylama Yap",previousMove: this.state.previousMove,resolveHamle});
    });
  }

  DecideMakeMove(hamle){
    this.state.resolveHamle(hamle);
  }
  
  async result(hamle){
    this.setState({previousMove: hamle});
  }

  render() { return renderView(this, VeteranVoteViews); }
}
// ********************* VETERAN VOTE *********************** \\


// ********************* VILLAGER VOTE *********************** \\
class VillagerVote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach', previousMove: 0};
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.Villager(ctc, this);
  }
  async getVote (){
    await new Promise(resolveHamle =>{
      this.setState({view:"Oylama Yap",previousMove: this.state.previousMove,resolveHamle});
    });
  }

  DecideMakeMove(hamle){
    this.state.resolveHamle(hamle);
  }
  
  async result(hamle){
    this.setState({previousMove: hamle});
  }

  render() { return renderView(this, VillagerVoteViews); }
}
// ********************* VILLAGER VOTE *********************** \\

renderDOM(<App />);
