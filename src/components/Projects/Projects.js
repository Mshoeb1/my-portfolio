import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="NxT Trend'z (E-Commerce Application)"
              description="E-commerce application like Flipkart and Amazon where user can have wide range of products depending upon the requirement in order to get right product filtration option is available."
              ghLink="https://github.com/Mshoeb1/Nxt-Trendz-App"
              demoLink="http://mnxtt.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="NXT WATCH (Video streaming App)"
              description="NXT WATCH is a video streaming app like YouTube developed with latest react.js library it has some cool features to select the channel and move to preferred video and save video, like/Dislike, Also theme change option is available like light/ dark to access the application user credential required username: rahul and password: rahul@2021."
              ghLink="https://github.com/Mshoeb1/MoviesAppLatest"
              demoLink="http://clonetube.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Chat Application"
              description="Realtime chat application where user can create a group and can have individual chat"
              ghLink="https://github.com/Mshoeb1/chat-application"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
