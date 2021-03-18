import React, { Component } from 'react';
import resumeData from '../resumeData';

export default class Works extends Component {
  render() {
    return (
      <section id="works">
        <div className = "works-block">
          <h2>Navigating Cancer</h2>
          <p>
          Worked with product managers and senior designers to 
          increase patient engagement product. Identified patient 
          pain points and needs through literature review, surveys, 
          and interviews. Developed prototypes and concept tested 
          potential features. Presented findings and feature 
          recommendations to the CEO and other stakeholders.

          </p>
          <br />
          <button className="works-link">View Project Details</button>
        </div>
      </section>  
    );
  }
}
