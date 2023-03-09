import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Navbar from './Navbar';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

import logo from './assets/logo.png';

const MyButton = styled.button`
  padding: 4em;
  background-color: papayawhip;
`;

const LogoContainer = styled.div`
  max-width: 3.5rem;
  grid-area: logo;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const MainContainer = styled.div`
  grid-area: main;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 7rem repeat(3, 1fr) 10rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: 
  "logo top top top top"
  "main main main main main"
  "main main main main main"
  "main main main main main"
  "footer footer footer footer footer";
  min-height: 100vh;
`;

const StyledFooter = styled.footer`
  grid-area: footer;
  /* display: flex; */
  align-self: center;
`;

function App() {
  return (
    <Router>
      <GridContainer>
        <LogoContainer>
          <StyledImg src={logo} alt="Logo" />
        </LogoContainer>
        <Navbar />
        <MainContainer>
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </MainContainer>
        <StyledFooter>
          <p>(C) 2023 Krille da man</p>
        </StyledFooter>
      </GridContainer>
    </Router>
  );
}

// Läxa tills 7/3:
// Skapa din personliga footer i samråd med andra på Discord.
// titta på exempel på andra portföljer
// Du kan t.ex ha med linkedin-ikon och github-ikon figma-ikon?
// Tips att researcha: "fontawesome"
// Obs. Discord är ICKE frivilligt, men ni behöver inte göra hela läxan på discord
// Om du blir klar med detta, gör samma sak med Navbar
// Pusha ditt projek till din github, skicka länk till mig.


export default App;