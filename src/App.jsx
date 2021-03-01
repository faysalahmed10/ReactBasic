import React from 'react'
import Home from './Home';
import About from './About';
import Work from './Work';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const App = () =>{
  
    return (
        
        <>
        <Router>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li> <Link to="/about">About</Link></li>
            <li><Link to="/work">Work</Link></li>
        </ul>

        <Switch>
        <Route exact path="/"> <Home /></Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/work">
            <Work />
          </Route>
          
        </Switch>


        </Router>
        </>
       
        
    )
}

export default App