import React, { Component } from "react";

import Header from "./components/Header";
import Title from "./components/Title";
import AboutMe from "./components/AboutMe";
import Projects from "./projects/Projects";
import Footer from "./components/Footer";

import "./App.css";

import { projects, headerLinks, aboutMeBlurb, aboutMeCardList } from "./data";
import headshot from "./images/headshot2.png";

import { string } from "prop-types";

// Types
interface AppState {
  headerLinks: headerLink[],
  headshot: any,
  aboutMeBlurb: any,
  aboutMeCardList: string[],
  projects: project[]
} 
type headerLink = {
  url: string,
  iconClass: string
}
type project = any

class App extends Component<{}, AppState> {
  state: AppState = {
    headerLinks,
    headshot,
    aboutMeBlurb,
    aboutMeCardList,
    projects
  };

  render() {
    return (
      <div className="background">
        <div className="center-column">
          <Header headerLinks={this.state.headerLinks} />
          <Title headshot={this.state.headshot} />
          {/* TODO update AboutMe section to blog? */}
          <AboutMe
            aboutMeBlurb={this.state.aboutMeBlurb}
            aboutMeCardList={this.state.aboutMeCardList}
          />
          <Projects projects={this.state.projects} />
          {/* TODO add section - links to other highlights like code challenge sites */}
          {/* TODO add section - Community Voices, pull in tweets from coders */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
