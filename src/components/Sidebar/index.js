import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
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
                <SidebarLink to='past' onClick={()=>{setIsOpen(false)}}>Past</SidebarLink>
                <SidebarLink to='passion' onClick={()=>{setIsOpen(false)}}>Passion</SidebarLink>
                <SidebarLink to='blog' onClick={()=>{setIsOpen(false)}}>Blog</SidebarLink>
                <SidebarLink to='contact' onClick={()=>{setIsOpen(false)}}>Contact</SidebarLink>
            </SidebarMenu>


        </SidebarContainer>
    )
}

export default Sidebar;
