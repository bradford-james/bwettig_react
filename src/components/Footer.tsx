import React, { Component } from "react";

import styled from "styled-components";

/* State */
const footerBulletins = [
  {
    iconClass: "fa-envelope",
    text: "bradwettig@gmail.com"
  },
  {
    iconClass: "fa-phone",
    text: "713 . 540 . 8626"
  },
  {
    iconClass: "fa-map-marker",
    text: "Austin, Tx 78752"
  }
];

/* Styles */
const FooterContainer = styled.footer`
  color: var(--background);
  text-align: center;
  background-color: var(--secondary);
  height: 130px;
`;
const Line = styled.div`
  background-color: var(--background);
  margin-bottom: 16px;
`;
const BulletinContainer = styled.div`
  display: flex;
`;
const Bulletin = styled.div`
  flex: 1;
  font-size: 12px;
`;
const BulletinText = styled.div`
  display: inline;
`;

/* Component Class */
class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <h3 className="font-inverse" id="contact_info_section">
          Contact Information
        </h3>
        <Line className="title-underline"></Line>
        <BulletinContainer>
          {footerBulletins.map(item => (
            <Bulletin>
              <span className="fa-stack fa-lg">
                <i
                  className={"fa " + item.iconClass + " fa-stack-1x fa-inverse"}
                ></i>
              </span>
              <BulletinText>{item.text}</BulletinText>
            </Bulletin>
          ))}
        </BulletinContainer>
      </FooterContainer>
    );
  }
}

export default Footer;
