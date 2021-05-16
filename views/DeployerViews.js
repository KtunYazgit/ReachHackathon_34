import React from 'react';

const exports = {};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Deployer">
        <h2>Admin (Admin)</h2>
        {content}
      </div>
    );
  }
}

exports.UcretBelirle = class extends React.Component {
  render() {
    const {parent, VarsayılanUcret, standardUnit} = this.props;
    const ucret = (this.state || {}).ucret || VarsayılanUcret;
    return (
      <div>
        <input
          type='number'
          placeholder={VarsayılanUcret}
          onChange={(e) => this.setState({ucret: e.currentTarget.value})}
        /> {standardUnit}
        <br />
        <button
          onClick={() => parent.UcretiUygula(ucret)}
        >Ucreti Belirle</button>
      </div>
    );
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const {parent, ucret, standardUnit} = this.props;
    return (
      <div>
        ucret (pay to deploy): <strong>{ucret}</strong> {standardUnit}
        <br />
        <button
          onClick={() => parent.deploy()}
        >Deploy</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Deploying... please wait.</div>
    );
  }
}

exports.WaitingForAttacher = class extends React.Component {
  async copyToClipborad(button) {
    const {ctcInfoStr} = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div>
        Waiting for Attacher to join...
        <br /> Please give them this contract info:
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
        <button
          onClick={(e) => this.copyToClipborad(e.currentTarget)}
        >Copy to clipboard</button>
      </div>
    )
  }
}

exports.FinishGame = class extends React.Component {
  render() {
    const { parent} = this.props;
    return (
      <div>
        <button
          onClick={() => {
            parent.DecideFinishGame(true);
          }}
        >Oyunu Bitir</button>
      </div>
    );
  }
}
export default exports;
