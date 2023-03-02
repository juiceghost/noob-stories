import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

const MyButton = styled.button`
  padding: 4em;
  background-color: papayawhip;
`;



function App() {

  return (
    <Router>
      <div>
        <Navbar />
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
        <h1>Hello</h1>

      </div>
    </Router>
  );
}


export default App;