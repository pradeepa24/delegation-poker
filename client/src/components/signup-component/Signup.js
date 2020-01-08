import React, { Component } from 'react';
import './Signup.css';

export default class Signup extends Component {
  render() {
    return (
      <div className="signup-content">
        <div className="signup-parts">
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
             <button>Create</button>
          </div>
          </form>
        </div>
      </div>
    )
  }
}
