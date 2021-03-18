import React, { Component } from 'react';
import resumeData from '../resumeData';
import profilePic from '../profilepic.jpg'

export default class About extends Component {
  render() {
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic" src={profilePic} alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
                  {resumeData.aboutme}
               </p>

               <h2>Education</h2>
                     <p className="other">
                        University Name: University of Washington, Seattle <br />
                        Major: Human Centered Design and Engineering <br />
                        Specialization: Human Computer Interactions <br />
                     </p>

               <div className="row">

                  <div className="columns contact-details">

                     <h2>Contact Details</h2>
                     <p className="address">
                        <span>{resumeData.name}</span>
                        <br></br>
                        <span>
                           Location: {resumeData.address}
                        </span>
                        <br />
                        Email: jnblukban@gmail.com
                        <br />
                        LinkedIn: /jenniferlukban
                        <span>{resumeData.website}</span>
                     </p>

                  </div>
               </div>

            </div>
         </div>
      </section>
    );
  }
}
