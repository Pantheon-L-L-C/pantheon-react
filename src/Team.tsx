import React from 'react';
import './Team.css';

import {Section, Color, Clouds} from './Section';


const Team = () => {
  return (
    <Section color={Color["Gray"]} clouds={Clouds.Both}>
      <h1>TEAM</h1>
    </Section>
  );
}

export default Team;

