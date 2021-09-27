import '../assets/App.css';
import Header from'./Header';
import About from'./About';
import Project from'./Project';
import Experience from'./Experience';
import Passion from'./Passion';
import Blog from'./Blog';
import Contact from'./Contact';
import Footer from'./Footer';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useState } from 'react';

import { 
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";
import React, { useEffect } from "react";

export default function App() {

  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <Router>
      <Navbar setIsOpen={setIsOpen}/>
      <Sidebar setIsOpen={setIsOpen}/>
        {/* <Header/>
        <About/>
        <Project/>
        <Experience/>
        <Passion/>
        <Blog/>
        <Contact/>
        <Footer/> */}

    </Router>
  );
}

