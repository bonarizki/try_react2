import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import AboutUs from './AboutUs.js';
import JsonTest from './JsonTest.js';
import UserAll from './UserAll.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

const token ='test';
function App() {
  if(token!=null){
    return (
      <h1>Jamban</h1>
    )
  }else{
  return (
    <React.Fragment>
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">CO-RE(ACT)</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href={'/Home'}>Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href={'/AboutUs'}>About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href={'/JsonTest'}>Json Test</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href={'/UserAll'}>User Data</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <div class="container">
            <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/Home' component={Home} />
                  <Route path='/AboutUs' component={AboutUs} />
                  <Route path='/JsonTest' component={JsonTest} />
                  <Route path='/UserAll' component={UserAll} />
            </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
  }
}



export default App;
