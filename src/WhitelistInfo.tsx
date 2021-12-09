import React from 'react';
import './WhitelistInfo.css';

import {Section, Color, Clouds} from './components/Section/Section';

const WhitelistInfo = () => {
  return (
    <Section color={Color["Red"]} clouds={Clouds.Top}>
      <h1>WHITELIST INFO</h1>
    </Section>
  );
}

export default WhitelistInfo;
