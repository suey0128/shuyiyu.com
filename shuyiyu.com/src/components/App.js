import '../assets/App.css';
import Header from'./Header';
import About from'./About';
import Project from'./Project';
import Experience from'./Experience';
import Passion from'./Passion';
import Blog from'./Blog';
import Contact from'./Contact';
import Footer from'./Footer';

import { 
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";
import React, { useEffect } from "react";

export default function App() {
  return (
    <div className="app">
        <Header/>
        <About/>
        <Project/>
        <Experience/>
        <Passion/>
        <Blog/>
        <Contact/>
        <Footer/>

    </div>
  );
}

