import React from "react";
import { Button } from "react-bootstrap";
import "./HomeScreen.scss";

const HomeScreen = () => {
  return (
    <>
      <section id="introSection" className="intro-section">
        <header>
          <h1>Xavier Carpenter</h1>
          <ul className="nav">
            <li>Projects</li>
            <li>Tools I Use</li>
            <li>Contact</li>
          </ul>
        </header>
        <div className="summary">
          <div className="short-summary">
            <h1>Hey, I'm Xavier.</h1>
            <p>
              A Software Developer based in Dallas, Texas. I create applications
              to help people.
            </p>
            <Button className="projects-btn" variant="primary">
              My Projects
            </Button>{" "}
          </div>
          <div className="selfie"></div>
        </div>
      </section>
      <section id="projectsSection" className="projects-section">
        <div className="projects">
          <h1>Featured Projects</h1>
          <div id="ProjectCard" class="project-card">
            <div class="project-image-container"></div>
            <div className="project-details">
              <h2 className="title">ProShop</h2>
              <p>A simple ecommerce website</p>
              <h3>Technologies</h3>
            </div>
          </div>
          <hr className="project-line-break" />
          <div class="project-card">
            <div class="project-image-container"></div>
            <div className="project-details">
              <h2 className="title">ProShop</h2>
              <p>A simple ecommerce website</p>
              <h3>Technologies</h3>
            </div>
          </div>
          <hr className="project-line-break" />
          <div class="project-card">
            <div class="project-image-container"></div>
            <div className="project-details">
              <h2 className="title">ProShop</h2>
              <p>A simple ecommerce website</p>
              <h3>Technologies</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="tools-section">
        <div className="tools-container">
          <h1>Tools I Use</h1>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-container">
          <h1>Let's Work Together</h1>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
