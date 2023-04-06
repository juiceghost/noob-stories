import React, { useState } from 'react';

import styled from 'styled-components';

const StyledInput = styled.input`
    background: #f2f2f2;
    padding: 12px;
    border-radius: 3px;
    width: 250px;
    font-size: 14px;
`;

const StyledButton = styled.button`
    background: #f2f2f2;
    padding: 12px;
    border-radius: 3px;
    font-size: 14px;
`;
function Form({ placeholder }) {
    const [name, setName] = useState("");

    //console.log(props)
    //const { placeholder } = props;
    function handleChange(evt) {
        console.log("value: " + evt.target.value)
        setName(evt.target.value)
    }
    return (
        <>
            <StyledInput type="text" placeholder={placeholder} value={name} onChange={handleChange}></StyledInput>
            <StyledButton>SEND</StyledButton>
        </>
    )
}

export default Form;