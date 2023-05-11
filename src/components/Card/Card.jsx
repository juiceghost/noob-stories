import React from 'react';

import { CardContainer, StyledCompPic, StyledReactPic, StyledButton, StyledP } from './styles';
/* import reactPic from '../../assets/react.jpg';
import compPic from '../../assets/comp.jpg'; */


function Card(props) {

    return (
        <CardContainer>
            <StyledCompPic src={props.upperPic} alt="Computer" />
            <StyledReactPic src={props.middlePic} alt="React" />
            <h1>{props.headline}</h1>
            <StyledP>{props.githubDescription ? props.githubDescription : props.description}</StyledP>
            <a href={props.url}><StyledButton>{props.buttonText}</StyledButton></a>
        </CardContainer>
    )
}
export default Card;