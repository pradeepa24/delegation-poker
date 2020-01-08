import React, { Component } from 'react';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className="about-content">
       <div className="about-parts">
        <h2>Delegation Poker & Delegation Board</h2>
        <div>
          <p>The objective of Delegation Poker is to drive home the idea of delegating decisions and tasks to your team within a controlled environment. It also is a good collaboration game. Many teams play it without even totalling points and more than anything else it’s a conversation topic and a starting point for the discussion of who should do what.</p>
          <ol>
            <li>Delegation is not a binary thing. There are plenty of “shades of gray” between being a dictator and being an anarchist.</li>
            <li>Delegation is a step-by-step process. You hand over accountability to other people in a controlled and gradual way.</li>
            <li>Delegation is context-dependent. You want to delegate as much as possible but if you go too far chaos might unfold.</li>
          </ol>
        </div>
        <div>
          <h4>"I introduced Delegation Poker to my project team. It helped a lot in our process of defining new responsibilities, which we as a team can now agree on. It’s become the basis of discussion with our bosses as even they are able to understand the fact, “that it can be easily migrated to the RACI Matrix."</h4>
          <p><small> - Team leader, Ortrun offshoring</small></p>      
        </div>
        <div>
          <h5>How to play Delegation Poker?</h5>
          <p>Each team plays this game differently, so you can follow some of the more common rules we’re sharing here or you can make up your own. It’s all about organizing how you and your team look at delegation and self-organization.</p>
          <p>Start by making a list of pre-defined cases or situations in which you want to create a delegation policy, establishing who has what influence. This can range from project design and authority to hiring new team members.</p>
        </div>
        </div>
      </div>
    )
  }
}
