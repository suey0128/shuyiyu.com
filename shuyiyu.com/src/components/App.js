import '../assets/App.css';

import { 
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";
import React from "react";
import Home from '../pages';

export default function App() {

  return (
    <Router>
      <Home />
    </Router>
  );
}

