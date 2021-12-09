import React from 'react';
import './Team.css';

import {Section, Color, Clouds} from './components/Section/Section';
import {TeamBadge, TeamBadgeProps} from './components/TeamBadge/TeamBadge';

import Slider from 'infinite-react-carousel';

import jack from './images/team/jack.png';
import amir from './images/team/amir.png';
import naadir from './images/team/naadir.png';
import david from './images/team/david.png';
import uwbcs from './images/team/uwbcs.png';

const MEMBERS_SHOWN = 4;
const TEAM_MEMBERS = [
  {
    firstName: "Jack",
    handle: "@JackSimpson",
    title: "CEO & Crypto VC",
    location: "San Fransisco",
    photoPath: jack
  },
  {
    firstName: "Amir",
    handle: "@Amirskiii",
    title: "Marketing Team",
    location: "Phoenix",
    photoPath: amir
  },
  {
    firstName: "Naadir",
    handle: "@NFT_Naads",
    title: "Media Manager",
    location: "Houston",
    photoPath: naadir
  },
  {
    firstName: "David",
    handle: "@casual.casual",
    title: "Painter & Ceramicist",
    location: "Bali",
    photoPath: david
  },
  {
    firstName: "UW BC Society",
    handle: "@UWBlockchain",
    title: "Dev Team",
    location: "Seattle",
    photoPath: uwbcs
  },
];

const teamMembersToBadges = (members: TeamBadgeProps[]) => members.map(member => <div><TeamBadge handle={member.handle} photoPath={member.photoPath} firstName={member.firstName} location={member.location} title={member.title} /></div>);

const sliderProps = {
  slidesPerRow: 1,
  slidesToShow: MEMBERS_SHOWN,
  rows: 1,
  autoplay: true,
  overscan: 2
}

const Team = () => {
  // Double the team
  let team = teamMembersToBadges(TEAM_MEMBERS);
  team.push(...team);
  team.push(...team);
  team.push(...team);

  return (
    <Section color={Color["Gray"]} clouds={Clouds.Both}>
      <h1>TEAM</h1>
      <Slider {...sliderProps}>
        {team}
      </Slider>
    </Section>
  );
}

export default Team;

