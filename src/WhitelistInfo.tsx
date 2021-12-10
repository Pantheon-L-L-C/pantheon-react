import React from 'react';
import './WhitelistInfo.css';

import {Section, Color, Clouds} from './components/Section/Section';

const WHITELIST_SECTIONS = [
  {
    title: "COUNCIL WHITELIST",
    value: <p></p>
  }
]

const WhitelistInfo = () => {
  return (
    <Section color={Color["Red"]} clouds={Clouds.Top}>
      <h1>WHITELIST INFO (Jan. 15th, 22)</h1>
    </Section>
  );
}

export default WhitelistInfo;
