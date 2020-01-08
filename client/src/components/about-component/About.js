import React, { Component } from 'react';
import './About.css';
import YouTubePlayer from 'react-player/lib/players/YouTube';

export default class About extends Component {
  render() {
    return (
      <div className="about-content">
       <div className="about-parts">
        <h2>Delegation Poker & Delegation Board</h2>
        <div>
          <p className="delegation-objective">The objective of Delegation Poker is to drive home the idea of delegating decisions and tasks to your team within a controlled environment. It also is a good collaboration game. Many teams play it without even totalling points and more than anything else it’s a conversation topic and a starting point for the discussion of who should do what.</p>
          <ol>
            <li><strong>Delegation is not a binary thing.</strong>
                <p><pre>      There are plenty of “shades of gray” between being a dictator and being an anarchist.</pre></p></li>
            <li><strong>Delegation is a step-by-step process.</strong>
                <p><pre>      You hand over accountability to other people in a controlled and gradual way.</pre></p> </li>
            <li><strong>Delegation is context-dependent.</strong>
                <p><pre>      You want to delegate as much as possible but if you go too far chaos might unfold.</pre></p></li>
          </ol>
        </div>
        <div className="delegation-experience">
          <h4><em>"I introduced Delegation Poker to my project team. It helped a lot in our process of defining new responsibilities, which we as a team can now agree on. It’s become the basis of discussion with our bosses as even they are able to understand the fact, that it can be easily migrated to the RACI Matrix."</em></h4>
          <p><small><em> - Team leader, Ortrun offshoring</em></small></p>      
        </div>
        <div className="delegation-video">
          <YouTubePlayer
             url='https://www.youtube.com/watch?v=VZF-G7MCSG4'
            //  playing
             controls
             // Other ReactPlayer props will work here
            />
        </div>
       
        <div className="delegation-poker-rules">
          <h4>How to play Delegation Poker?</h4>
          <p>Each team plays this game differently, so you can follow some of the more common rules we’re sharing here or you can make up your own. It’s all about organizing how you and your team look at delegation and self-organization.</p>
          
        </div>
        <h3 className="start-delegation">Start by making a list of pre-defined cases or situations in which you want to create a delegation policy, establishing who has what influence. This can range from project design and authority to hiring new team members.</h3>
        <div className="delegation-play-steps">
          <p>Team members should be organized in groups of three to seven people. Each teammate can log in to their Delegation-Poker account and navigate to the Poker page where they can see Seven Levels of Delegation cards</p>
          <h4>Team members will repeat the following steps for each pre-defined case:</h4>
          <ol>
            <li>One person picks out a situation to read aloud OR he tells a story from personal experience</li>
            <li>Each player chooses one of the seven delegation cards privately, reflecting on how she would delegate the decision in that particular situation.</li>
            <li>Once all players have decided, they can then reveal their selected cards.</li>
            <li>Everyone earns points according to the value of their card, except the players that are the "highest minority" (see below).</li>
            <li>Let the people with the highest and the lowest cards explain the reasoning behind their choices.</li>
            <li>You can then create a Delegation Board to show the results of your consensus.</li>
          </ol>
        </div>
        <div className="delegation-video">
          <YouTubePlayer
             url='https://www.youtube.com/watch?v=BRBR3SOzu6M'
            //  playing
             controls
             // Other ReactPlayer props will work here
            />
        </div>
        <div className="poker-rule">
          <p>The Rule of the Highest Minority speaks to the idea of delegating as far as possible without taking it too far.
           You may have a player who always chooses seven, if he is alone in his choice, that gets thrown out as an option, as do his points.
           Now if three or four people all chose seven, that is the majority meaning each of them earns seven points.</p>
           <p>Some also play that the Lowest Minority gets no points either, like a boss who always wants to 
           maintain control or an indecisive teammate who doesn't want any authority.</p>
        </div>
        <div className="delegation-experience">
          <h4><em>"I first used these cards in an Agile Management 3.0 training. Now I use them to train my management team. They are easy to use and you can easily clarify the delegation styles and the different approaches."</em></h4>
          <p><small><em> - Jeroen vam Hertum, operations director at Strypes ICT</em></small></p>      
        </div>
        <div className="board-intro">
          <p>Besides the card game there is an easy tool people can use to communicate the type of delegation between a manager and team or between any two parties.
           This tool can also help both parties be open and transparent about what they expect from each other. This tool is called…</p>
        </div>
        <section id="delegationBoard">
          <h4>Delegation Board</h4>
          <p>The delegation board is a physical board (or a spreadsheet, or the window that looks out onto your neighbour’s kitchen) that vertically lists a number of key decision areas that someone delegates to others.
           In the horizontal dimension the board shows the seven levels of delegation.
           For each key decision area the board has a note in one of the seven columns clearly communicating to everyone how far authority is delegated in that area.</p>
          <p>The delegation board is useful in various ways.
           It models the creation of boundaries and the balancing act of authorization, 
           both of which are needed to get the best out of self-organization. 
           Secondly, by visualizing key decision areas and delegation levels,
           the board can act as an information radiator influencing and directing anyone who takes a closer look at delegation.</p>
        </section>
        </div>
      </div>
    )
  }
}
