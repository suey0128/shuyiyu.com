import React, { useState } from 'react';
import About from '../components/About';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Project from '../components/Project';
import Past from '../components/Past';



const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <>
            <Navbar setIsOpen={setIsOpen}/>
            <Sidebar setIsOpen={setIsOpen} isOpen={isOpen}/>
            <About />
            <Project />
            <Past />
        </>
    )
}

export default Home
