import React from "react";
import styled from "styled-components";
import {
    Link
} from "react-router-dom";

export const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    grid-area: top;
`;

export const StyledLink = styled(Link)`
    color: black;
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

//console.log(showLoop(links));

//console.log(links.map(link => "Hej jag skickar dig till " + item.link + " och som text skriver jag " + item.text))

const Navbar = () => {
    return (
        <StyledNav>
            {links.map(link => <StyledLink to={link.to} key={link.id}>{link.text}</StyledLink>)}
        </StyledNav>
    );
}

export default Navbar;
