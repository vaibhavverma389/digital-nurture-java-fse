import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor() {
    super();

    this.state = {
      amount: "",
      currency: "Euro",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const euro = (this.state.amount / 90).toFixed(2);

    alert(
      `Converting to Euro Amount is ${euro} ${this.state.currency}`
    );
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "green" }}>
          Currency Convertor!!!
        </h1>

        <form onSubmit={this.handleSubmit}>
          <label>Amount</label>

          <input
            type="number"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />

          <br />
          <br />

          <label>Currency</label>

          <input
            type="text"
            name="currency"
            value={this.state.currency}
            onChange={this.handleChange}
          />

          <br />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;