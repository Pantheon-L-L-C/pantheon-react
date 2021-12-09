import React from 'react';
import './Team.css';

import {Section, Color, Clouds} from './components/Section/Section';
import Carousel from './components/Carousel/Carousel';
import { TeamBadge, TeamBadgeProps } from './components/TeamBadge/TeamBadge';

const MEMBERS_SHOWN = 4;
const TEAM_MEMBERS = [
  {
    firstName: "Jack",
    handle: "@JackSimpson",
    title: "CEO & Crypto VC",
    location: "San Fransisco",
    photoPath: "./images/team/jack.png"
  },
  {
    firstName: "Amir",
    handle: "@Amirskiii",
    title: "Marketing Team",
    location: "Phoenix",
    photoPath: "./images/team/amir.png"
  },
  {
    firstName: "Naadir",
    handle: "@NFT_Naads",
    title: "Media Manager",
    location: "Houston",
    photoPath: "./images/team/naadir.png"
  },
  {
    firstName: "David",
    handle: "@casual.casual",
    title: "Painter & Ceramicist",
    location: "Bali",
    photoPath: "./images/team/david.png"
  },
  {
    firstName: "UW Blockchain Society",
    handle: "@UWBlockchain",
    title: "Dev Team",
    location: "Seattle",
    photoPath: "./images/team/uwbcs.png"
  },
];

const teamMembersToBadges = (members: TeamBadgeProps[]) => { 
  let jsx = members.forEach(member => {
    console.log("Rendering - ", member);
    return (<TeamBadge {...member}/>);
  })
  return jsx;
}

const Team = () => {
  return (
    <Section color={Color["Gray"]} clouds={Clouds.Both}>
      <h1>TEAM</h1>
      {teamMembersToBadges(TEAM_MEMBERS)}
    </Section>
  );
}

export default Team;

