import React, { Component } from "react";

import Project from "./components/Project";
import styled from "styled-components";

/* Styles */
const Container = styled.section`
  padding: 22px 80px 15px 80px;
`;

const Projects = ( props: any ) => {

  return (
    <Container className="third-section">
      <h3 className="third-section__label">Personal Projects</h3>
      <div className="title-underline"></div>
      <div className="third-section__content">
        {props.projects.map((project: any) => (
          <Project project={project} />
        ))}
      </div>
    </Container>
  );
}


export default Projects;
