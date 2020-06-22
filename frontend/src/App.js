import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import CreateInstitute from "./components/create-institute.component";
import EditInstitute from "./components/edit-institute.component";
import InstitutesList from "./components/institute-list.component";

import logo from "./logo.png";

class App extends Component {

  render() {
    return (

      <Router>

        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://megaexams.com/" target="_blank">
              <img src={logo} width="50" height="50" alt="https://megaexams.com/" />
            </a>
            <Link to="/" className="navbar-brand">Megaexams Institutes Management System</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">InstitutesList</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Add Institutes</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={InstitutesList}/>
          <Route path="/edit/:id" component={EditInstitute}/>
          <Route path="/create" component={CreateInstitute}/>

        </div>

         
        
      </Router>
      
        
      
    );
  }
}

export default App;