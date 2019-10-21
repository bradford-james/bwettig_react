import React from "react";
import portfolioSiteImage from "./images/mountains1.jpg";
import quoteroImage from "./images/quotify-screenshot4.PNG";
import projectInitImage from "./images/project-init-ss1.PNG";
import enlitenedImage from "./images/enlighten-ss1.png";

export const projects = [
  {
    title: "Portfolio Site",
    imagePath: portfolioSiteImage,
    desc:
      "Coded from the ground up, this is a simple static site to give a bit of background about myself, as well as display some of theside projects i've been up to recently. Feel free to contact me with any inquiries, collaborations, questions, or sport climbing requests!",
    links: [
      {
        name: "https://github.com/bradford-james/bwettig_site",
        type: "GitHub"
      }
    ],
    tags: [
      {
        name: "React",
        display: "Y"
      },
      {
        name: "Jest",
        display: "Y"
      }
    ]
  },
  {
    title: "Quotero",
    desc:
      "Project consists of a simple cli-tool that will retrieve a random quote, upon using the command 'quotero', to lighten up your terminal as you work and possibly provide that spark of inspiration that's been eluding you",
    imagePath: quoteroImage,
    links: [
      {
        name: "https://github.com/bradford-james/quotero",
        type: "GitHub"
      },
      {
        name: "https://www.npmjs.com/package/quotero",
        type: "NPM"
      }
    ],
    tags: [
      {
        name: "Node.js",
        display: "Y"
      },
      {
        name: "CLI Tool",
        display: "Y"
      },
      {
        name: "Jest",
        display: "N"
      }
    ]
  },
  {
    title: "Project-Init",
    imagePath: projectInitImage,
    desc:
      "A CLI tool designed to initialize a local workspace based upon type, with options for downloading dependancies and initialize a local/remote git repository. Credit due to:",
    links: [
      {
        name: "https://github.com/bradford-james/project-init",
        type: "GitHub"
      }
    ],
    tags: [
      {
        name: "Node.js",
        display: "Y"
      },
      {
        name: "CLI Tool",
        display: "Y"
      },
      {
        name: "Jest",
        display: "Y"
      }
    ]
  },
  {
    title: "Enlitened",
    imagePath: enlitenedImage,
    desc:
      "Coded from the ground up, this is a simple static site to give a bit of background about myself, as well as display some of theside projects i've been up to recently. Feel free to contact me with any inquiries, collaborations, questions, or sport climbing requests!",
    links: [
      {
        name: "https://github.com/bradford-james/bwettig_site",
        type: "GitHub"
      }
    ],
    tags: [
      {
        name: "Node.js",
        display: "Y"
      },
      {
        name: "Puppeteer",
        display: "Y"
      },
      {
        name: "CLI Tool",
        display: "Y"
      },
      {
        name: "Jest",
        display: "Y"
      }
    ]
  }
];

export const aboutMeBlurb = (
  <React.Fragment>
    <p>
      Grew up an engineer-to-be city kid, moved out to a small town, ran away to
      a smaller town (College Station, in its own way, is both quite large and
      quite small), then ran even farther to the Nordic Sea, before landing back
      in good 'ol Austin, Texas.
    </p>
    <p>
      After all the traveling, turns out there's a familiarity to home you just
      can't find anywhere else.
    </p>
    <p>
      Harder to satisfy though is the endless curiosities of our fast paced
      world, driven by constant innovations and further questions. In that way,
      software development has proven to be a worthy outlet to exercise some of
      that curiosity and has become something of a passion of mine.
    </p>
    <p>
      What started as a transitional gig (while realigning my career as an
      engineer from the offshore oilfield to something closer to home and
      family) has become a career path that I've embraced entirely and
      tirelessly. I skim articles from Morning Cup of Coffee before I get out of
      bed in the morning, listen to Real Talk Javascript as I drive to work, and
      browse Medium during lunch!
    </p>
    <p>
      At the moment, I'm fully entrenched in expanding my understanding of what
      it takes to write good code. Feel free to check out some of the work below
      that I've got going at the moment, or my GitHub page as well where
      collaboration is more than welcome.
    </p>
  </React.Fragment>
);

export const headerLinks = [
  {
    url: "https://www.facebook.com/brad.wettig",
    iconClass: "fa-facebook"
  },
  {
    url: "https://linkedin.com/in/brad-wettig",
    iconClass: "fa-linkedin"
  },
  {
    url: "https://github.com/bradford-james",
    iconClass: "fa-github"
  }
];

export const aboutMeCardList = [
  "I'm a bit of a DIY kind of guy, including amatuer mechanic tinkering, my time as an apartment handyman, and as a shop machinist",
  "Big outdoors enthusiast, most notably climbing/mountaineering.",
  "Music! I've been dabbling in guitar and other various stringed instruments for most of my life"
];
