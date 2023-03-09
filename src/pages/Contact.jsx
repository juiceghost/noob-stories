import React, { useState } from 'react';
import styled from 'styled-components';

import Form from '../components/Form';

function Contact() {

    return (
        <>
            <p>Contact</p>
            <Form placeholder="Your name" test={5} />
        </>
    );
}

export default Contact;