import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './components/home-component/Home';
import Login from './components/login-component/Login';
import Signup from './components/signup-component/Signup';
import About from './components/about-component/About';
import axios from 'axios';
// console.log(process.env, '////')
// var serverURL = ''
// if(process.env.NODE_ENV == 'development'){
//   serverURL = 'http://localhost:8080'
// } else {
//   serverURL = 'https://glamcloset.herokuapp.com'
// }
export default class App extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      email:"",
      password:"",
      user:{},
      theError:""
    }
  }
  updateInput = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }
  signup = (e) => {
    e.preventDefault();
            axios.post(`http://localhost:3000/api/signup`, {
              email: this.state.email,
              password: this.state.password,
          }, {
              withCredentials: true
          })
          .then((response)=>{
              if(response.data.error){         
                  this.setState({
                    theError: response.data.error,
                  })
              }
              if(response.data.user){
                this.setState({
                  theError:null
                })
                this.props.history.push('/login');
              }
              this.setState({
                  // emailInput: "",
                  password: ""
              })
          })
          .catch((err)=>{
              console.log(err);
          })
    }

  login = (e) => {
    e.preventDefault();
      axios.post(`http://localhost:3000/api/login`, {
        email: this.state.email,
        password: this.state.password,
        }, {
        withCredentials: true
        })
          .then((response)=>{
              if(response.data.error){ 
                 this.setState({
                    theError:response.data.error,
                 })        
                }
              if(response.data.user){
                 this.setState({
                    user: response.data.user,
                  },()=>{
                    this.props.history.push('/');
                  })
                }
          })
            .catch((err)=>{
                console.log(err);
          })
    
      }
  render(){
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
          <button className="mobile-menu">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkCt8TtYgWMmoZnuyUufixUgjOyh50tXO6iBfWPz6gGXx4AeHF8A&s" alt="hamburger menu" />
          </button>
        </header>
        <div className="page-content">
          <Switch >
          <Route exact path='/' render = { (props) => <Home {...props} /> } />
          <Route exact path='/login' render = { (props) => <Login {...props} updateInput = {this.updateInput}
                                                                             email ={this.state.email}
                                                                             password={this.state.password}
                                                                             login = {this.login}
          /> } />
          <Route exact path='/signup' render = { (props) => <Signup {...props} updateInput = {this.updateInput}
                                                                             email ={this.state.email}
                                                                             password={this.state.password}
                                                                             signup = {this.signup}/> } />
          <Route exact path='/about' render = { (props) => <About {...props} /> } />
          </Switch>
        </div>
       
      </div>
    );
  }

}

