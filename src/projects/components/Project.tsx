import React, { Component } from "react";

import styled from "styled-components";

/* Styles */
const Container = styled.div`
  height: 200px;
  border-radius: 5px;
  display: flex;
  margin: 25px 0px;
`;
const Content = styled.div`
  padding: 30px;
  flex: 1;
  background-color: var(--primary);
  border-radius: 0px 5px 5px 0px;
`;
const Title = styled.div`
  margin-left: 20px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  background-color: var(--background);
  padding: 3px 8px;
  border-radius: 8px;
  display: inline;
  box-shadow: 0px 3px 3px 0px rgba(64, 63, 63, 0.08);
  border-width: 2px;
  border-color: var(--tertiary);
  border-style: solid;
`;
const Description = styled.div`
  margin-top: 20px;
  font-size: 14px;
  height: 70px;
`;
const ExternalLink = styled.div`
  font-size: 14px;
  display: flex;
  margin-left: 5px;
`;
const ExternalLinkText = styled.a`
  margin: auto 0px auto -8px;
  font-size: 14px;
  font-weight: bold;
  color: #545454;
  text-decoration: none;
}
:hover {
  color: #999;
}`;

const Project = ( props: any ) => {
  /* State */
  const { title, desc, imagePath } = props.project;

  /* Styles */
  const Image = styled.div`
    min-width: 280px;
    background-color: var(--tertiary);
    border-radius: 5px 0px 0px 5px;
    background-image: url("${imagePath}");
    background-size: cover;
  `;

  /* Component */
  return (
    <Container>
      <Image></Image>
      <Content>
        <Title>{title}</Title>
        <Description>{desc}</Description>
        <ExternalLink>
          <span className="fa-stack fa-lg fa--color-black">
            <i className="fa fa-arrow-right fa-stack-1x"></i>
          </span>
          <ExternalLinkText href="https://github.com/bradford-james/bwettig_static">
            Link to Project
          </ExternalLinkText>
        </ExternalLink>
      </Content>
    </Container>
  );
}

export default Project;
