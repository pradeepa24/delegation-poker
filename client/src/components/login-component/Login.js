import React, { Component } from 'react';
import './Login.css';
import {Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div className="login-content">
        <div className="login-parts">
          <h3>Welcome back!</h3>
          <form>
          <div>
            <label>Email</label>
            <input type="email" name="email"  placeholder="Please enter your Email Id" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password"  placeholder="******" />
          </div> 
          <div>
             <button>Login</button>
          </div>
          </form>
          <Link to="/signup"><p>Don't have an account? Sign up</p></Link>
        </div>
      </div>
    )
  }
}
