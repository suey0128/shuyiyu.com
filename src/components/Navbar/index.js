import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav, 
        NavbarContainer, 
        NavLogo, 
        MibileIcon, 
        NavMenu, 
        NavItem, 
        NavLinks,
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

                        {/* <NavItem>
                            <NavLinks to='passion' >Passion</NavLinks>
                        </NavItem> */}

                    </NavMenu>


                    <NavLogo to='about'>
                        S
                    </NavLogo>

                    <MibileIcon>
                        <FaBars onClick={()=>{setIsOpen(true)}}/>
                    </MibileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' >About</NavLinks>
                        </NavItem>

                        {/* <NavItem>
                            <NavLinks to='blog' >Blog</NavLinks>
                        </NavItem> */}

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
