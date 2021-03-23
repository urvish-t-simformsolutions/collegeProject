import React from "react";
import Feature from "../../Components/fixPageComp/Feature/Feature";
import Newsletter from "../../Components/fixPageComp/Newsletter/Newsletter";
import "./About.css";

const About = (props) => {
  return (
    <>
      <section>
        <div className="about_container">
          <h1>About</h1>
        </div>
      </section>
      <Feature />
      <Newsletter />
    </>
  );
};

export default About;
