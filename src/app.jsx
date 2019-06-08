/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import Navbar from "./components/Layout/Navbar";
import Alert from "./components/Layout/Alert";
import About from "./components/Pages/About";
import User from "./components/Users/User";
import GithubState from "./context/github/githubState";
import AlertState from "./context/alert/alertState";
import Home from "./components/Pages/Home";
import NotFound from "./components/Pages/NotFound";

import axios from "axios";
import "./app.scss";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App(){
    return(
        <GithubState>
        <AlertState>
        <Router>
        <div className="app" style={{marginTop:"100px"}}>
            <Navbar />
            <div className="container">
                <Alert/>
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User}/>
                <Route component={NotFound} />
                </Switch>
            </div>
        </div>
        </Router>
        </AlertState>
        </GithubState>
       
    );

}
    
export default App;