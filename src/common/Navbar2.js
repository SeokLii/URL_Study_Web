import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//page
import MainPage from '../components/mainpage/Main';
import LoginPage from '../components/loginpage/Login';

// styles
import styles from '../utils/css/Navbar2.css';

// images
import contents from '../utils/images/contents.PNG';
import introduce from '../utils/images/introduce.PNG';
import notice from '../utils/images/notice.PNG';
import rent from '../utils/images/rent.PNG';

function Navbar() {
  return (
    (
      /*주석*/
      <Router>
        <div>
          <div className="sidebar">
            <ul>
              <li className="listItemA" ><Link to="/">1</Link></li>
              <li className="listItemA" ><Link to="/Login">2</Link></li>
              <li className="listItemA" ><Link to="/notice">3</Link></li>
              <li className="listItemA" ><Link to="/rent">4</Link></li>
            </ul>
          </div>

          <Switch>
            <Route exact path="/" component = { MainPage } />
            <Route exact path="/Login" component = {LoginPage} />
            <Route exact path="/notice" component = { MainPage } />
            <Route exact path="/rent" component = { MainPage } />
          </Switch>
        </div>
      </Router>
    )
  );
}

export default Navbar;
