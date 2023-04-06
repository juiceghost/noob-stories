import React, { useState } from 'react';
import styled from 'styled-components';
import Form from '../components/Form';

import Card from '../components/Card';

function Home() {

    return (
        <>
            <p>Home</p>
            <Form placeholder="Your email" test={5} />
            <Card />
        </>
    );
}

export default Home;