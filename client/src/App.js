import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './components/home-component/Home';
import Login from './components/login-component/Login';
import Signup from './components/signup-component/Signup';
import About from './components/about-component/About';

function App() {
  return (
    <div className="main-content">
      <header>
        <div className="logo">
        <Link to='/'><h2>Delegation Poker</h2></Link>
        </div>
        <nav>
        <Link to='/about'><p>About</p></Link>
        <Link to='/login'><p>Login</p></Link>
        </nav>
      </header>
      <div className="page-content">
        <Switch >
        <Route exact path='/' render = { (props) => <Home {...props} /> } />
        <Route exact path='/login' render = { (props) => <Login {...props} /> } />
        <Route exact path='/signup' render = { (props) => <Signup {...props} /> } />
        <Route exact path='/about' render = { (props) => <About {...props} /> } />
        </Switch>
      </div>
     
    </div>
  );
}

export default App;
