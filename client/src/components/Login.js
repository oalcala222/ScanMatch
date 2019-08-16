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
}