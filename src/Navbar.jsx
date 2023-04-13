import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
    Link
} from "react-router-dom";

import Hamburger from './components/Hamburger';

export const StyledLink = styled(Link)`
    color: black;
    font-size: x-large;
    text-decoration: none;
    margin-left: 1em;
    /* background-color: #f1356d; */
    /* border-radius: 8px; */
`;

const links = [
    {
        id: 1,
        to: "/",
        text: "Home"
    },
    {
        id: 2,
        to: "/contact",
        text: "Contact"
    },
    {
        id: 3,
        to: "/about",
        text: "About"
    },
    {
        id: 4,
        to: "/projects",
        text: "Projects"
    }
];

function showLoop(arrayToLoop) {

    console.log(arrayToLoop.length)
    let returnArray = [];
    for (let i = 0; i < arrayToLoop.length; i++) {
        console.log("i: " + i)
        console.log(arrayToLoop[i])
        returnArray.push("Hej jag skickar dig till " + arrayToLoop[i].link + " och som text srkiver jag " + arrayToLoop[i].text)
    }
    return returnArray;
}

export const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    grid-area: top;

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

//console.log(showLoop(links));

//console.log(links.map(link => "Hej jag skickar dig till " + item.link + " och som text skriver jag " + item.text))

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <StyledNav>
                {links.map(link => <StyledLink to={link.to} key={link.id}>{link.text}</StyledLink>)}
            </StyledNav>
            <Hamburger links={links}>


            </Hamburger>
        </>
    );
}

export default Navbar;
