import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Navbar from './Navbar';

import logo from './assets/logo.png';

const MyButton = styled.button`
  padding: 4em;
  background-color: papayawhip;
`;

const LogoContainer = styled.div`
  max-width: 3.5rem;
  grid-area: logo;
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
`

function App() {

  return (
    <Router>
      <GridContainer>
        <LogoContainer><img style={{ width: "100%" }} src={logo} alt="Logo" /></LogoContainer>
        <Navbar />
        <MainContainer>
          <Switch>
            <Route path="/about">
              <p>About</p>
            </Route>
            <Route path="/portfolio">
              <p>Portfolio</p>
            </Route>
            <Route path="/">
              <p>Home</p>
            </Route>
          </Switch>
          <h1>Hello Krille</h1>
        </MainContainer>
      </GridContainer>
    </Router>
  );
}


export default App;