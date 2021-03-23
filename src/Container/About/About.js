import React from "react";
import Feature from "../../Components/fixPageComp/Feature/Feature";
import Newsletter from "../../Components/fixPageComp/Newsletter/Newsletter";
import "./About.css";
import videoImage from "../../images/vide.png";

const About = (props) => {
  return (
    <>
      <section>
        <div className="about_container">
          <h1>About</h1>
        </div>
      </section>
      <section className="section_padding">
        <div className="about">
          <div className="about_content">
            <h5>Our Mission</h5>
            <h3>
              Donec imperdiet congue orci consequat mattis. Donec rutrum
              porttitor sollicitudin. Pellentesque id dolor tempor sapien
              feugiat ultrices nec sed neque.
            </h3>
          </div>
          <div className="about_us_video">
            <img src={videoImage} alt="#" class="img_fluid" />
            <a
              className="about_video_icon popup-youtube"
              href="https://www.youtube.com/watch?v=DWHB6nTyKDI"
            >
              {">"}
            </a>
          </div>
        </div>
      </section>
      <Feature />
      <Newsletter />
    </>
  );
};

export default About;
