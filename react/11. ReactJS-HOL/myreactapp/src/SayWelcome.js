import React, { Component } from 'react';

class SayWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.showMessage = this.showMessage.bind(this);
  }

  showMessage(msg) {
    this.setState({ message: msg });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.showMessage('welcome')}>Say Welcome</button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default SayWelcome;
