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
const Navbar = () => {
    return (
        <StyledNav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
            <StyledLink to="/portfolio">Portfolio</StyledLink>
            <StyledLink to="/about">About</StyledLink>
        </StyledNav>
    );
}

export default Navbar;
