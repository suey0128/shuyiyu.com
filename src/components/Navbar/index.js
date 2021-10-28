import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav, 
        NavbarContainer, 
        NavLogo, 
        MibileIcon, 
        NavMenu, 
        NavItem, 
        NavLinks,
        NavOutsideLinks,
    } from './NavbarElements';



const Navbar = ({ setIsOpen }) => {

    return (
        <>
            <Nav>
                <NavbarContainer>

                    <NavMenu>

                        <NavItem>
                            <NavLinks to='project' >Project</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='past' >Past</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavOutsideLinks 
                                href='https://docs.google.com/document/d/13NnuXw6Oz086NX3NEB3wJI-evAoi6z5tweJK_JHJK5g/edit?usp=sharing' 
                                target='_blank'
                                >Resume</NavOutsideLinks>
                        </NavItem>

                    </NavMenu>


                    <NavLogo to='about'>
                        Shuyi
                    </NavLogo>

                    <MibileIcon>
                        <FaBars onClick={()=>{setIsOpen(true)}}/>
                    </MibileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' >About</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavOutsideLinks 
                                href='https://syui0128.medium.com/' 
                                target='_blank'
                                >Blog</NavOutsideLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='contact' >Contact</NavLinks>
                        </NavItem>

                    </NavMenu>

                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
