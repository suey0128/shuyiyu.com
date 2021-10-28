import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarOutsideLink,
} from './SidebarElements'

const Sidebar = ({ setIsOpen, isOpen }) => {

    return (
        <SidebarContainer style={{
            opacity: isOpen ? '100%' : '0', 
            top:  isOpen ? '0' : '-100%'
          }}>
            <Icon>
                <CloseIcon onClick={()=>{setIsOpen(false)}}/>
            </Icon>

            <SidebarMenu>
                <SidebarLink to='about' onClick={()=>{setIsOpen(false)}}>About</SidebarLink>
                <SidebarLink to='project' onClick={()=>{setIsOpen(false)}}>Project</SidebarLink>
                <SidebarOutsideLink 
                    onClick={()=>{setIsOpen(false)}}
                    href='https://docs.google.com/document/d/13NnuXw6Oz086NX3NEB3wJI-evAoi6z5tweJK_JHJK5g/edit?usp=sharing' 
                    target='_blank'
                >Resume</SidebarOutsideLink>
                <SidebarLink to='past' onClick={()=>{setIsOpen(false)}}>Past</SidebarLink>
                <SidebarOutsideLink 
                    onClick={()=>{setIsOpen(false)}}
                    href='https://syui0128.medium.com/' 
                    target='_blank'
                >Blog</SidebarOutsideLink>
                <SidebarLink to='contact' onClick={()=>{setIsOpen(false)}}>Contact</SidebarLink>
            </SidebarMenu>


        </SidebarContainer>
    )
}

export default Sidebar;
