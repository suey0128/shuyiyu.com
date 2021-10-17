import '../assets/App.css';
import CssBaseline from '@mui/material/CssBaseline';

import { 
  BrowserRouter as Router
} from "react-router-dom";
import React from "react";
import Home from '../pages';

export default function App() {

  return (
    <Router>
      <CssBaseline />
      <Home />
    </Router>
  );
}

