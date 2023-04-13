import React, { useState } from "react";
import styled from "styled-components";
import {
    Link
} from "react-router-dom";


// https://codepen.io/erikterwan/pen/EVzeRP Inspo for Hamburger
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
    z-index: 1;

    @media screen and (min-width: 901px) {
        display: none;
    }

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
            transform-origin: 4px 0px;
            transform: rotate(${({ isOpen }) => isOpen ? '45deg' : ''}) translate(${({ isOpen }) => isOpen ? '-2px, -1px' : ''});

            /* transform: rotate(45deg) translate(-2px, -1px); */
            &:nth-child(1) { top: 12px;  transform-origin: 0% 0%; }
            &:nth-child(2) { top: 24px; }
            &:nth-child(3) { top: 36px; transform-origin: 0% 100%; }
        }
    }
    `;

export const StyledResMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    position: absolute;
    top: 0;
    right: 0;
    background-color: white;
    height: 500px;
    width: 300px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    transform: translateX(${({ isOpen }) => isOpen ? '0' : '300px'});
    /* transform: translateX(300px); */
`;

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

//console.log(showLoop(links));

//console.log(links.map(link => "Hej jag skickar dig till " + item.link + " och som text skriver jag " + item.text))

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <StyledNav>
                {links.map(link => <StyledLink to={link.to} key={link.id}>{link.text}</StyledLink>)}
            </StyledNav>
            <Hamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                <label>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </Hamburger>
            <StyledResMenu isOpen={isOpen}>
                {links.map(link => <StyledLink to={link.to} key={link.id}>{link.text}</StyledLink>)}
            </StyledResMenu>
        </>
    );
}

export default Navbar;
