import React from 'react';
import './WhitelistInfo.css';

import {Section, Color, Clouds} from './components/Section/Section';
import Profile from './components/Profile/Profile';

import amir from './images/team/amir.png';

const COUNCIL_CONTENT = (
  <p>
    <span>
      <strong>0.1Ξ</strong> 1111 spaces
    </span>
    <br />
    <span>48 hours before public sale</span>
    <br />
    <span>2 per wallet</span>
  </p>
);

const GENERAL_CONTENT = (
  <p>
    <span>
      <strong>0.125Ξ</strong> 2222 spaces
    </span>
    <br />
    <span>24 hours before public sale</span>
    <br />
    <span>2 per wallet</span>
  </p>
);

const PUBLIC_CONTENT = (
  <p>
    <span>
      <strong>0.3Ξ</strong> 4 hours &gt; <strong>0.2Ξ</strong> 4 hours &gt; <strong>0.125Ξ</strong>
    </span>
    <br />
    <span>20 per transaction</span>
  </p>
);

const MINTING_CONTENT = (
  <Profile photoPath={amir} small>
    <div style={{textAlign: "left"}}>
      <p>
        <span style={{color: "#ffffcf"}}><strong>Mint 2:</strong></span> <span>10 lucky people win ULTRA RARE 1 of 1 early sketch</span>
        <br />

        <span style={{color: "#ffffcf"}}><strong>Mint 3:</strong></span> <span>Airdrop 1 cup shards pack (next collection)</span>
        <br />
        <strong><span style={{color: "#ffffcf"}}>Mint 4:</span></strong> <span>WL for COA + 1 cup piece (next collection)</span>
        <br />
        <span style={{color: "#ffffcf"}}><strong>Mint 10:</strong></span><span>&nbsp;Pantheon token airdrop</span><br />
        <em><span>*rewards stack</span></em>
      </p >
    </div >
  </Profile>
);

const WHITELIST_SECTIONS = [
  {
    title: "COUNCIL WHITELIST",
    value: COUNCIL_CONTENT
  },
  {
    title: "GENERAL WHITELIST",
    value: GENERAL_CONTENT
  },
  {
    title: "PUBLIC SALE",
    value: PUBLIC_CONTENT
  },
  {
    title: "MINTING REWARDS",
    value: MINTING_CONTENT
  },
]

const mapSections = () => {
  return WHITELIST_SECTIONS.map(section => (
    <div className="whitelist-section">
      <h2>{section.title}</h2>
      <div className="section-content">{section.value}</div>
    </div>
  ));
}


const WhitelistInfo = () => {
  return (
    <Section color={Color["Red"]} clouds={Clouds.Top}>
      <div className="whitelist">
        <h1>WHITELIST INFO (Jan. 15th, 22)</h1>
        <div className="whitelist-section-container">
        {mapSections()}
        </div>
      </div>
    </Section>
  );
}

export default WhitelistInfo;
