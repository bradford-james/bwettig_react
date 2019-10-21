import React, { Component } from "react";
import styled from "styled-components";

// Styles
const Container = styled.header`
  height: 80px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 6px;
`;
const Title = styled.div`
  font-weight: bold 
  font-size: 24px;
  letter-spacing: 1px;
  color: var(--secondary);
`;
const Icons = styled.div`
  display: flex;
  font-size: 10px;
`;
const Line = styled.div`
  height: 3px;
  background-color: var(--tertiary);
  width: 100%;
`;

const Header = ( props: any ) => {
  const headerLinks = props.headerLinks
  return (
    <Container className="header">
      <Content>
        <Title>Portfolio</Title>
        <Icons>
          {headerLinks.map((link: any) => (
            <span className="fa-stack fa-lg">
              <a
                href={link.url}
                target="_blank"
                className={"fa " + link.iconClass + " fa-stack-1x fa-inverse"}
              ></a>
            </span>
          ))}
        </Icons>
      </Content>
      <Line></Line>
    </Container>
  );
}

export default Header;
