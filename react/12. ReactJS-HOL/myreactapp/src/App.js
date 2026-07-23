import React, { Component } from "react";
import "./App.css";

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function GuestGreeting() {
  return (
    <div>
      <h1>Please sign up.</h1>

      <h3>Flight Details</h3>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI-202</td>
            <td>Delhi</td>
            <td>Mumbai</td>
            <td>09:00 AM</td>
          </tr>

          <tr>
            <td>6E-105</td>
            <td>Lucknow</td>
            <td>Bangalore</td>
            <td>12:30 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function UserGreeting() {
  return (
    <div>
      <h1>Welcome Back</h1>

      <h2>Book Your Flight Ticket</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Flight</th>
            <th>Destination</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI-202</td>
            <td>Mumbai</td>
            <td>
              <button>Book Now</button>
            </td>
          </tr>

          <tr>
            <td>6E-105</td>
            <td>Bangalore</td>
            <td>
              <button>Book Now</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Greeting(props) {
  if (props.isLoggedIn) {
    return <UserGreeting />;
  }

  return <GuestGreeting />;
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    let button;

    if (this.state.isLoggedIn) {
      button = (
        <LogoutButton
          onClick={this.handleLogout}
        />
      );
    } else {
      button = (
        <LoginButton
          onClick={this.handleLogin}
        />
      );
    }

    return (
      <div className="container">
        <Greeting
          isLoggedIn={this.state.isLoggedIn}
        />

        <br />

        {button}
      </div>
    );
  }
}

export default App;