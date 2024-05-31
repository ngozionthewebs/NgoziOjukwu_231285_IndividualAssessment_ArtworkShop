import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './Navbar';
import Products from './Products';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Community from './Community';

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar></NavBar> 
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/products">
              
              <Products></Products>
            </Route>
            <Route path="/community">
              <Community></Community>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}


export default App;
