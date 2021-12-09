import React from 'react';
import './Ethos.css';

import ethos from './images/ethos.png';

import {Section, Color, Clouds} from './Section';

const Ethos = () => {
  return (
    <Section color={Color["Red"]} clouds={Clouds.Top}>
      <img alt="" src={ethos} />

      <h1>ETHOS</h1>
      <p>PANTHEON is a decentralized democratic community based around celestial personalities. We, as a community, are inspired by our simple motto:</p>

      <h1>SUPPORTIVE : SUPPORTED</h1>

      <p>We prioritize education and the conscientious use of technology to promote an atmosphere of acceptance and empowerment for all. We know the liberating power of Blockchain and we wish to share it with you through our NFTs.</p>
    </Section>
  );
}

export default Ethos;
