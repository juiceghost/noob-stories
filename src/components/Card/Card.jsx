import React from 'react';

import { CardContainer, StyledCompPic, StyledReactPic, StyledButton, StyledP } from './styles';
import reactPic from '../../assets/react.jpg';
import compPic from '../../assets/comp.jpg';

function OldCard() {

    return (
        <CardContainer>
            <StyledCompPic src={compPic} alt="Computer" />
            <StyledReactPic src={reactPic} alt="React" />
            <h1>React Portfolio</h1>
            <StyledP>Please behold my amazing React portfolio, showcasing my immense skills.</StyledP>
            <StyledButton>View more</StyledButton>
        </CardContainer>
    )
}

function Card(props) {

    return (
        <CardContainer>
            <StyledCompPic src={props.upperPic} alt="Computer" />
            <StyledReactPic src={props.middlePic} alt="React" />
            <h1>{props.headline}</h1>
            <StyledP>{props.description}</StyledP>
            <StyledButton>{props.buttonText}</StyledButton>
        </CardContainer>
    )
}
export default Card;