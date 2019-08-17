// Include React
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Nav from './children/Nav'


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
    }.bind(this)).catch(function (err){
      consolw.log(err);
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


}