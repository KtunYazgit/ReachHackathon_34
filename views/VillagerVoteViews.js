import React from 'react';


const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="VillagerVote">
        <h2>Oylama (Mafia)</h2>
        {content}
      </div>
    );
  }
}

exports.Attach = class extends React.Component {
  render() {
    const {parent} = this.props;
    const {ctcInfoStr} = this.state || {};
    return (
      <div>
        Please paste the contract info to attach to:
        <br />
        <textarea spellcheck="false"
          className='ContractInfo'
          onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
          placeholder='{}'
        />
        <br />
        <button
          disabled={!ctcInfoStr}
          onClick={() => parent.attach(ctcInfoStr)}
        >Attach</button>
      </div>
    );
  }
}

exports.Attaching = class extends React.Component {
  render() {
    return (
      <div>
        Attaching, please wait...
      </div>
    );
  }
}

exports.AcceptTerms = class extends React.Component {
  render() {
    const {ucret, standardUnit, parent} = this.props;
    const {disabled} = this.state || {};
    return (
      <div>
        The terms of the game are:
        <br /> Wager: {ucret} {standardUnit}
        <br />
        <button
          disabled={disabled}
          onClick={() => {
            this.setState({disabled: true});
            parent.termsAccepted();
          }}
        >Accept terms and pay wager</button>
      </div>
    );
  }
}

exports.WaitingForTurn = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for the other player...
        <br />Think about which move you want to play.
      </div>
    );
  }
}

exports.getVote = class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      oy: 0
    };
  }
  render() {
    const moves = ["Oyuncu 1","Oyuncu 2","Oyuncu 3","Oyuncu 4"]
    const {parent, previousMove} = this.props;
    return (
      <div>
        <div>
          <input type="radio" id="Oyuncu 1" name="MoveGroup" value="Oyuncu 1"
            onClick= {() => this.setState({oy: 1})} />
          <label for= "Oyuncu 1">Oyuncu 1</label>

          <input type="radio" id="Oyuncu 2" name="MoveGroup" value="Oyuncu 2"
            onClick= {() => this.setState({oy: 2})} />
          <label for= "Oyuncu 2">Oyuncu 2</label>

          <input type="radio" id="Oyuncu 3" name="MoveGroup" value="Oyuncu 3"
            onClick= {() => this.setState({oy: 3})} />
          <label for= "Oyuncu 3">Oyuncu 3</label>

          <input type="radio" id="Oyuncu 4" name="MoveGroup" value="Oyuncu 4"
            onClick= {() => this.setState({oy: 4})} />
          <label for= "Oyuncu 4">Oyuncu 4</label>
        </div>

        <p>Önceki Hamle = {previousMove === 0? "Hamle Yok" :moves[previousMove-1]}</p>
        <button
          onClick={() => parent.state.hamle} onMouseUp={() => parent.selectMafiaVote()}>
          Hamle Yap
        </button>

        
      </div>
    );
  }
}


export default exports;
