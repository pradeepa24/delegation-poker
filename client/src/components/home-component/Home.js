import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home-content">
        <div className="home-sections">
        <div className="heading-explanation">
          <h1>Use Delegation Poker to clarify who’s responsible for what and to what level.</h1> 
          <p>This is a method where you can encourage employee engagement through controlled self-organization and clarified value and decision-making.</p>
        </div>
        <div className="delegation-cards">
           <div className="card-content one">
             <div className="card-top">
               <h4>1</h4>
               <img src="https://tse3.mm.bing.net/th?id=OIP.tBeZdw2kI5rHNUFMgoHOiAAAAA&pid=Api&P=0&w=300&h=300" alt="employees"/>
             </div>
             <div className="card-details">
               <h5>TELL</h5>
             </div>
             <h4>I will tell them</h4>
          </div>
          <div className="card-content two">
             <div className="card-top">
                <h4>2</h4>
                <img src="https://tse3.mm.bing.net/th?id=OIP.tBeZdw2kI5rHNUFMgoHOiAAAAA&pid=Api&P=0&w=300&h=300" alt="employees"/>
             </div>
             <div className="card-details">
                <h5>SELL</h5>
             </div>
             <h4>I will try and sell it to them</h4>
           </div>
           <div className="card-content three">
             <div className="card-top">
               <h4>3</h4>
               <img src="https://tse3.mm.bing.net/th?id=OIP.tBeZdw2kI5rHNUFMgoHOiAAAAA&pid=Api&P=0&w=300&h=300" alt="employees"/>
             </div>
             <div className="card-details">
                <h5>CONSULT</h5>
             </div>
             <h4>I will consult and then decide</h4>
           </div>
           <div className="card-content four">
             <div className="card-top">
                <h4>4</h4>
                <img src="https://tse3.mm.bing.net/th?id=OIP.tBeZdw2kI5rHNUFMgoHOiAAAAA&pid=Api&P=0&w=300&h=300" alt="employees"/>
             </div>
             <div className="card-details">
               <h5>AGREE</h5>
             </div>
             <h4>We will agree together</h4>
          </div>
          <div className="card-content five">
            <div className="card-top">
              <h4>5</h4>
              <img src="https://tse3.mm.bing.net/th?id=OIP.tBeZdw2kI5rHNUFMgoHOiAAAAA&pid=Api&P=0&w=300&h=300" alt="employees"/>
            </div>
            <div className="card-details">
              <h5>ADVISE</h5>
            </div>
            <h4>I will advise but they decide</h4>
          </div>
          <div className="card-content six">
            <div className="card-top">
              <h4>6</h4>
              <img src="https://tse3.mm.bing.net/th?id=OIP.tBeZdw2kI5rHNUFMgoHOiAAAAA&pid=Api&P=0&w=300&h=300" alt="employees"/>
            </div>
            <div className="card-details">
              <h5>INQUIRE</h5>
            </div>
            <h4>I will inquire after they decide</h4>
          </div>
          <div className="card-content seven">
            <div className="card-top">
               <h4>7</h4>
               <img src="https://tse3.mm.bing.net/th?id=OIP.tBeZdw2kI5rHNUFMgoHOiAAAAA&pid=Api&P=0&w=300&h=300" alt="employees"/>
            </div>
            <div className="card-details">
               <h5>OBEY</h5>
            </div>
            <h4>I will fully delegate</h4>
          </div>
        </div>
        <div className="home-page-parts">
          <img src="https://www.incimages.com/uploaded_files/image/970x450/shutterstock_785893624_368750.jpg" alt="employees-relationship" />
          <div className="explanation">
            <h3>Dimensions of Relationship</h3>
            <p>
              The relationship can be
              <ul>
                <li>Between anyone in the organization</li>
                <li>Between co-workers (Horizontal)</li>
                <li>Between an employee and his superior (Upward & Downward)</li>
                <li>Between two members in the management and so on.</li>
              </ul>
              It is important that the employees share a healthy relationship with each other to deliver their best performances.
            </p>
          </div>
        </div>
        <div className="home-page-parts">
        <div className="explanation">
          <h3>The Purpose of Delegation</h3>
          <p>
            Organizations and companies are often involved in many activities, such as: sourcing, distribution and customer service. If work and tasks are not organised
            it can affect the efficiency, productivity, development, employee satisfaction and market share of the company.
            Delegation is needed to:
            <ul>
              <li>Increase efficiency</li>
              <li>Increase development</li>
              <li>Increase productivity</li>
              <li>Increase job satisfaction</li>
            </ul>
          </p>
        </div>
          <img src="https://res.cloudinary.com/vantagecircle/image/upload/v1551272095/Healthy-relationship-with-employees-1_f9y0di.png" alt="employees" />
        </div>
         
        </div>
      </div>
    )
  }
}
