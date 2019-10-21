import React, { Component } from "react";

import styled from "styled-components";

/* Styles */
const Container = styled.section`
  padding: 22px 60px;
  height: auto;
`;
const Columns = styled.div`
  margin: 20px 0;
  column-count: 3;
  column-gap: 40px;
  column-fill: auto;
  text-align: justify;
}
> p {
  margin-top: 0px;
  margin-bottom: 15px;
  font-size: 14px;
  column-fill: auto;
}`;

const Card = styled.div`
  background-color: var(--primary);
  border-radius: 5px;
  padding: 1px 15px 5px;
  width: 240px;
  box-sizing: border-box;
  margin: 0px auto;
  color: #545454;
  text-align: left;
`;
const CardHeader = styled.p`
  text-indent: 0px;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;
`;
const CardList = styled.ul`
  margin-top: 12px;
  padding: 0 10px 0 15px;
  font-size: 12px;
`;
const CardListItem = styled.li`
  margin-bottom: 8px;
  margin-left: 0px;
`;

const AboutMe = ( props: any ) => {

  const aboutMeBlurb = props.aboutMeBlurb;
  const aboutMeCardList = props.aboutMeCardList;

  return (
    <Container>
      <h3 className="second-section__label">About Me</h3>
      <div className="title-underline"></div>
      {/* TODO Update Blurb (make better) */}
      <Columns>
        {aboutMeBlurb}
        <Card>
          <CardHeader>Some quick hitters:</CardHeader>
          <CardList>
            {aboutMeCardList.map((item: any ) => (
              <CardListItem>{item}</CardListItem>
            ))}
          </CardList>
        </Card>
      </Columns>
    </Container>
  );
}

export default AboutMe;
