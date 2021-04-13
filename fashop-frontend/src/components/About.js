import React from "react";
import profile1 from "../image/profile1.jpg";

const About = () => {
  return (
    <>
      <div class="about-section">
        <h1>Welcome to Fashop</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>

      <h2 class="subheader" style={{ textAlign: 'center' }}>Our Team</h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src={ profile1 } alt="Yvonne" style={{ width: '100%' }} />
            <div class="container">
              <h2>Yvonne Chen</h2>
              <p class="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>yvonne@gmail.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
