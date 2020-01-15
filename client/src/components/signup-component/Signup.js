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
            <input type="email" name="email"  placeholder="Please enter your Email Id" 
              onChange={this.props.updateInput} value={this.props.email}
            />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password"  placeholder="******" 
              onChange={this.props.updateInput} value={this.props.password}
            />
          </div> 
          <div>
             <button onClick={this.props.signup}>Create</button>
          </div>
          </form>
        </div>
      </div>
    )
  }
}
