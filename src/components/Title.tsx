import React, { Component } from "react";

import styled from "styled-components";
import backgroundImage from "../images/mountains1.jpg";

/* Styles */
const Container = styled.section`
  padding: 0px;
  text-align: center;
  height: 570px;
`;
const Backdrop = styled.div`
  height: 300px;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -20px;
  border-radius: 5px 5px 0px 0px;
`;
const Portrait = styled.div`
  height: 120px;
  width: 124px;
  border: 3px solid var(--tertiary);
  border-radius: 50%;
  margin: auto;
  position: relative;
  top: -60px;
  background-color: white;
  margin-bottom: -60px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
> * {
  height: 140px;
  width: 140px;
}`;
const Name = styled.h1`
  font-size: 40px;
  font-weight: 400;
  height: 28px;
  padding-bottom: 10px;
  margin: 30px 0;
  color: #545454;
`;
const Buttons = styled.div`
  > a > button {
    border: 3px solid var(--tertiary);
    border-radius: 15px;
    background-color: var(--primary);
    color: #707070;
    width: 150px;
    height: 30px;
    margin: 0px 5px;
    font-weight: bold;
    user-select: none;
    outline: none;
    cursor: pointer;
    text-decoration: none;
  }
  > a > button:hover {
    filter: brightness(103%);
  }
`;

const Title = ( props: any ) => {
  const headshot = props.headshot;

  return (
    <Container className="title">
      <Backdrop></Backdrop>
      <Portrait>
        <img src={headshot} alt="Bradford Jameson Wettig"></img>
      </Portrait>
      <Name>Bradford Wettig</Name>
      <Buttons>
        <a>
          <button id="contact_info_button" type="button">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            Contact
          </button>
        </a>
        <a href="/lib/resume_brad_wettig.pdf" download>
          <button type="button">
            <i className="fa fa-arrow-down" aria-hidden="true"></i>
            Download CV
          </button>
        </a>
      </Buttons>
    </Container>
  );
}

export default Title;
