import React from 'react';
import './Hero.css';

import hero from './images/hero.png';

import Button from 'react-bootstrap/Button';

import {Section, Color} from './components/Section/Section';
import Profile from './components/Profile/Profile';

const Hero = () => {
  return (
    <Section color={Color["Cream"]}>
      <Profile photoPath={hero}>
        <div className="hero">
          <Button>Pantheon</Button>
          <h1>JOIN THE PANTHEON</h1>
          <p>Mystery often surrounds the accuracy of mythology, exemplifying gods as perfect idols in our human space, but these idols have a story… an origin…</p>
          <div className="social-buttons">
            <Button>Discord</Button>
            <Button>Twitter</Button>
            <Button>Instagram</Button>
          </div>
        </div>
      </Profile>
    </Section>
  );
}

export default Hero;
