import React from "react";
import Mashumaru from "../Components/Projects/images/mashumaru-pic-ver2.JPG";
import AOS from "aos";

function About() {
  AOS.init();
  return (
    <section id="about">
      {/* <hr></hr> */}
      <div className="about-div">
        <div className="section" data-aos="fade-right" data-aos-duration="500">
          <h1 className="title">About Me</h1>
          <div className="container-div">
            <div
              className="col about-pic-section"
              data-aos="fade-right"
              data-aos-duration="1000">
              <img
                className="profile-pic"
                src={Mashumaru}
                alt="pic-of-me"></img>
            </div>

            <div className="col about-information">

                {/* <h3 className="description">
                  I am a self-taught website and web application developer.
                </h3> */}
                <h3 className="description">
                  My name is Matt, a self-taught website and web application developer.
                </h3>
                <p className="about-details">
                  I started learning web development in 2019 using online
                  courses and self-teaching in my own time. Programming and
                  coding has always been an interest of mine, so I decided to
                  take the leap and change my career.
                </p>
                <p className="about-details">
                  Since then, I have built multiple websites, web applications
                  and even a couple of web games.
                </p>
                <p className="about-details">
                  My aim is to start my new career in Web Development within a
                  company, that promotes personal and professional development
                  with opportunities to work on new and existing websites and
                  web applications. A place where I can look forward to a
                  prosperous future!{" "}
                </p>
                <p className="about-details">
                  I am constantly building new projects and learning new
                  technologies to further enchance my skills. After all, I love
                  coding!{" "}
                </p>
                <p className="about-details">
                  I also love coffee (especially Starbucks Caramel Frappuccino),
                  hiking, photography and making music.
                </p>
                <h3 className="description">Current skillset:</h3>
                <p className="about-details">
                  HTML, CSS, Bootstrap, Materialize, JavaScript, jQuery,
                  React.js, Vue.js, Node.js and currently learning C# and .NET.
                </p>
              </div>
            </div>
          </div>
        </div>

    </section>
  );
}

export default About;
