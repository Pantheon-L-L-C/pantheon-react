import React from 'react';
import './Hero.css';

import hero from './images/hero.png';

import {Section, Color} from './Section';

const Hero = () => {
  return (
    <Section color={Color["Cream"]}>
      <img src={hero}/>
      <h1>JOIN THE PANTHEON</h1>
      <p>Mystery often surrounds the accuracy of mythology, exemplifying gods as perfect idols in our human space, but these idols have a story… an origin…</p>
    </Section>
  );
}

export default Hero;
