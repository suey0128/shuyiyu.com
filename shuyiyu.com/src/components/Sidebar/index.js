import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
} from './SidebarElements'

const Sidebar = ({ setIsOpen }) => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>

            <SidebarMenu>
                <SidebarLink to='about'>About</SidebarLink>
                <SidebarLink to='project'>Project</SidebarLink>
                <SidebarLink to='past'>Past</SidebarLink>
                <SidebarLink to='passion'>Passion</SidebarLink>
                <SidebarLink to='blog'>Blog</SidebarLink>
                <SidebarLink to='contact'>Contact</SidebarLink>
            </SidebarMenu>


        </SidebarContainer>
    )
}

export default Sidebar
