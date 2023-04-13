import React, { useState } from "react";
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

    @media screen and (max-width: 900px) {
        display: none;
    }
`;
export const Hamburger = styled.div`
    position: absolute;
    right: 2em;
    top: 2em;
    & { 
        label {
        display: block;
        background: #fff;
        width: 40px; /* less width = square hamburger */
        height: 60px;
        position: relative;
        cursor: pointer;
    }

        span {
            position: absolute;
            height: 6px;
            width: 100%;
            background: #000;
            transition: 0.5s;
            &:nth-child(1) { top: 12px; }
            &:nth-child(2) { top: 24px; }
            &:nth-child(3) { top: 36px; }
        }
    }
    `;

export const StyledResMenu = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background-color: red;
    height: 500px;
    width: 300px;
    transform: translateX(300px);
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
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <StyledNav>
                {links.map(link => <StyledLink to={link.to} key={link.id}>{link.text}</StyledLink>)}
            </StyledNav>
            <Hamburger>
                <label for="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </Hamburger>
            <StyledResMenu>

            </StyledResMenu>
        </>
    );
}

export default Navbar;
