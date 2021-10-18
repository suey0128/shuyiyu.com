import React, { useState, useEffect  } from 'react';
import About from '../components/About';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Project from '../components/Project';
import Past from '../components/Past';
import Footer from '../components/Footer';



const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <>
            <Navbar setIsOpen={setIsOpen}/>
            <Sidebar setIsOpen={setIsOpen} isOpen={isOpen}/>
            <About />
            <Project />
            <Past />
            <Footer />
        </>
    )
}

export default Home
