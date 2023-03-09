import React, { useState } from 'react';
import styled from 'styled-components';
import Form from '../components/Form';

function Home() {

    return (
        <>
            <p>Home</p>
            <Form placeholder="Your email" test={5} />
        </>
    );
}

export default Home;