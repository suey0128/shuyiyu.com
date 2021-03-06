import styled from 'styled-components';
import {Link as LinkScroll } from 'react-scroll';

const green = '#253f36'; 
const pink = '#e5b7a8'; 
const orange = "#ff7d5b";

export const Nav = styled.nav`
    background: ${green};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (min-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 80;
    z-index: 1;
    width: 100%;
    padding: 0, 24px;
    max-width: 1100px;

    @media screen and (max-width: 768px) {
       justify-content: space-between
    }
`

export const NavLogo = styled(LinkScroll)`
    color:${pink};
    // justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

`

export const MibileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: ${pink};
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkScroll)`
    color: ${pink};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1rem;

    &:active {
        color:${orange};
    }

    &:hover {
        color:${orange};
    }
`

export const NavOutsideLinks = styled.a`
    color: ${pink};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1rem;

    &:active {
        color:${orange};
    }

    &:hover {
        color:${orange};
    }
`
