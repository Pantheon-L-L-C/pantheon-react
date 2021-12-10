import React from 'react';
import './Ethos.css';

import ethos from './images/ethos.png';

import {Section, Color, Clouds} from './components/Section/Section';
import Profile from './components/Profile/Profile';

const Ethos = () => {
  return (
    <Section color={Color["Red"]} clouds={Clouds.Top} flip={true}>
      <Profile photoPath={ethos} flip>
        <h1>ETHOS</h1>
        <p>PANTHEON is a decentralized democratic community based around celestial personalities. We, as a community, are inspired by our simple motto:</p>

        <h1>SUPPORTIVE : SUPPORTED</h1>

        <p>We prioritize education and the conscientious use of technology to promote an atmosphere of acceptance and empowerment for all. We know the liberating power of Blockchain and we wish to share it with you through our NFTs.</p>
      </Profile>
    </Section>
  );
}

export default Ethos;
