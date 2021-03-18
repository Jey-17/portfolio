

import React, { Component } from 'react';
import resumeData from '../resumeData';

export default class Workst extends Component {
  render() {
    return (
      <section id="workst">
        <div className = "works-block">
          <h2>Resisting Colonized Systems<br />in HCI</h2>
          <p>
          Centers around analyzing how colonization is enabled in HCI pedagogy, both inherently 
          from academia and uniquely to HCI, and what the impacts of such colonization are 
          on students in HCI pedagogy spaces. Employed methods of literature review, 
          reflexive writing, and storytelling to design a toolkit facing HCI students. Currently
          working on a cookbook that aims to disupt these systems and act as a tool for other 
          students to resist.

          </p>
          <br />
          <button className="works-link">View Project Details</button>
        </div>
      </section>  
    );
  }
}