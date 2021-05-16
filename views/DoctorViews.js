import React from 'react';


const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Doctor">
        <h2>Attacher (Doctor)</h2>
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
    const {wager, standardUnit, parent} = this.props;
    const {disabled} = this.state || {};
    return (
      <div>
        The terms of the game are:
        <br /> Wager: {wager} {standardUnit}
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

exports.makeMove = class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hamle: 0
    };
  }
  render() {
    const moves = ["Buzz The Bell","Not Buzz The Bell"]
    const {parent, previousMove} = this.props;
    return (
      <div>
        <div>
          <input type="radio" id="Buzz The Bell" name="MoveGroup" value="Buzz The Bell"
            onClick= {() => this.setState({hamle: 1})} />
          <label for= "Buzz The Bell">Buzz The Bell</label>

          <input type="radio" id=" Not Buzz The Bell" name="MoveGroup" value="Not Buzz The Bell"
            onClick= {() => this.setState({hamle: 2})} />
          <label for= "Not Buzz The Bell">Not Buzz The Bell</label>
        </div>

        <p>Önceki Hamle = {previousMove === 0? "Hamle Yok" :moves[previousMove-1]}</p>
        <button
          onClick={() => parent.state.hamle} onMouseUp={() => parent.selectDoctorVote()}>
          Hamle Yap
        </button>

        
      </div>
    );
  }
}


export default exports;
