import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//page
import MainPage from '../components/mainpage/Main';
import LoginPage from '../components/loginpage/Login';

// styles
import styles from '../utils/css/Navbar.css';

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
        <div className="Navbar">
          <div>
            <Link to="/"><img className="Navber-img" src={contents}/></Link>
            <Link to="/Login"><img className="Navber-img" src={introduce}/></Link>
            <Link to="/notice"><img className="Navber-img" src={notice}/></Link>
            <Link to="/rent"><img className="Navber-img" src={rent}/></Link>
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
