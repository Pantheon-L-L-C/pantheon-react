import React from 'react';
import './Nav.css';

import navbar_logo from './images/navbar_logo.png';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Section, Color, Clouds} from './Section';

const Nav = () => {
  return (
    <Section color={Color["Cream"]} nav>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#">
            <img
              alt=""
              height="50"
              width="50"
              src={navbar_logo}
              className="d-inline-block align-top"
            />{' '}
            PANTHEON NFT
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Section>
  );
}

export default Nav;
