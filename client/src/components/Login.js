// Include React
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav/Nav';

require('./login.css');

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.loginUser = this.loginUser.bind(this);

  }
  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  loginUser(submitObject) {

    axios.post('/apis/users/login', submitObject)
      .then(function (data) {
        console.log(data.data);
        if (data.data.success) {
          this.props.authenticate();
          this.setState({
            redirectToReferrer: true
          });
        } else {
          alert(data.data.message);
        }
      }.bind(this)).catch(function (err) {
        console.log(err);
      });

    this.setState({
      username: '',
      password: ''
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const usernameInput = this.state.username;
    const passwordInput = this.state.password;

    const objSubmit = {
      username: usernameInput,
      password: passwordInput
    }

    if (!objSubmit.username || !objSubmit.password) {
      return;
    }

    this.loginUser(objSubmit);
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }

    return (
      <div>
        <Nav
          authenticated={this.props.authenticated}
          authenticate={this.props.authenticate}
          deAuthenticate={this.props.deAuthenticate}
          logout={this.props.logout}
        />
        <div className="container loginmodal-container">
          <h1 className="dark-grey">Log In to Your Account</h1><br />
          <form className="login" onSubmit={this.handleSubmit.bind(this)}>
            <input id="username-input" ref="user" type="text" name="user" placeholder="Username" onChange={this.handleUsernameChange} value={this.state.username} />
            <input id="password-input" ref="password" type="password" name="pass" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password} />
            <input type="submit" name="login" className="login loginmodal-submit" value="Login" />
          </form>
          <div className="login-help">
            <Link className="dark-grey bordered555" to={"/signup"}> Register </Link>
          </div>
        </div>
      </div>
    );
  }
}