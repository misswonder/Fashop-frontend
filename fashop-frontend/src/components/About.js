import React from "react";
import profile1 from "../image/profile1.jpg";

const About = () => {
  return (
    <>
      <div class="about-section">
        <h1>Welcome to Fashop</h1>
        <p>True style never dies.</p>
        <p>Be unique, be brave, be YOU.</p>
      </div>

      <br></br>
      <h2 class="subheader" style={{ textAlign: 'center' }}>Our Team</h2>
      <div class="rowone">
        <div class="columnone">
          <div class="card">
            <img src={ profile1 } alt="Yvonne" style={{ width: '100%' }} />
            <div class="container">
              <h2>Yvonne Chen</h2>
              <p class="title">CEO & Founder</p>
              <p>We build personalities, not just styles.</p>
              <p>yvonne@gmail.com</p>
              <p>
                <button class="contactbutton">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
