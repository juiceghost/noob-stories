import React from 'react';
import styled, { css } from "styled-components";

const normal = css`
    transform: rotate(0deg);
    &:nth-child(1) { top: 12px;  transform-origin: 0% 0%; }
    &:nth-child(2) { top: 24px; }
    &:nth-child(3) { top: 36px; transform-origin: 0% 100%; }
    `;

const crossmark = css`


            &:nth-child(1) { 
                top: 12px;  
                transform-origin: 0% 0%; 
                transform: rotate(45deg) translate(-2px, -1px);

            }
            &:nth-child(2) { 
                top: 24px; 
                opacity: 0;
                transform: rotate(0deg) scale(0.2, 0.2);
            }
            &:nth-child(3) { 
                top: 36px; 
                transform-origin: 0% 100%; 
                transform: rotate(-45deg) translate(0, -1px);
                }
`;


export const StyledHamburger = styled.div`
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
            opacity: 1;
            background: #232323;
            transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), 
                        opacity 0.55s ease;
            transform-origin: 4px 0px;

            ${({ isOpen }) => (!isOpen ? normal : crossmark)}
        }
    }
    `;

export const StyledResMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    position: absolute;
    top: 0;
    right: 0;
    background-color: white;
    height: 500px;
    width: 300px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    transform: translateX(${({ isOpen }) => isOpen ? '0' : '300px'});
    /* transform: translateX(300px); */
    & {
        a {
            margin-right: 2em;
            margin-top: 1em;
        }

        a:nth-child(1) {
            margin-top: 4em;
        }
    }
`;