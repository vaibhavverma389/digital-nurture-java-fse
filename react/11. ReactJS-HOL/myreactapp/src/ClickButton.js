import React, { Component } from 'react';

class ClickButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ text: 'I was clicked' });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>OnPress</button>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default ClickButton;
