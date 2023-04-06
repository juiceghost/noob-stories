import React, { useState } from 'react';
import styled from 'styled-components';
import Form from '../components/Form';

import Skills from '../components/Skills';

function Home() {

    return (
        <>
            {/* <p>Home</p> */}
            {/*  <Form placeholder="Your email" test={5} /> */}
            <Skills />
        </>
    );
}

export default Home;