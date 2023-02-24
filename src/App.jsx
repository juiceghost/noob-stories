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
  const [text, setText] = useState("");

  const handleChange = (evt) => {
    setText(evt.target.value);
  }
  const myName = "Frank";
  const buttonText = "KLICKA INTE";
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/about">
            <p>About</p>
            <MyComponent handleChange={handleChange} text={text} setText={setText} buttonText={buttonText} myName={myName} />
          </Route>
          <Route path="/portfolio">
            <p>Portoflio</p>
          </Route>
          <Route path="/">
            <p>Home</p>
          </Route>
        </Switch>
        <h1>Hello {text}</h1>

      </div>
    </Router>
  );
}


function MyComponent(props) {
  //const { myName } = props;
  console.log(props.myName)
  return (
    <>
      <h2>Hej {props.myName} på riktigt från MyComponent</h2>
      <MyButton {...props}>{props.buttonText}</MyButton>
      <MyInput {...props} />
    </>
  )

}

function MyInput({ text, handleChange }) {



  return (<input type="text" placeholder="Skriv" value={text} onChange={handleChange} />)
}
export default App;