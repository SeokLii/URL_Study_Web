import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

//page
import MainPage from '../components/mainpage/Main';
import LoginPage from '../components/loginpage/Login';
import ManagePage from '../components/managepage/Management'

// styles
import styles from '../utils/css/common/Sidebar.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

// images

function Sidebar() {
  const routeChange = () =>{ //링크 이동
    window.location.href='/';
  }

  return (
    (
      <>
      <Router>
        <SideNav style={{'background-color': '#8b00FF'}}>
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home" onClick={routeChange}>
                <NavIcon><i className="fa fa-fw fa-home SidebarIcon"/></NavIcon>
                <NavText><Link to="/">Home</Link></NavText>
            </NavItem>
            <NavItem eventKey="Management">
                <NavIcon><i className="fas fa-link SidebarIcon"/></NavIcon>
                <NavText>Management</NavText>
                  <NavItem eventKey="Management/page1">
                      <NavText><Link to="/Management">page1</Link></NavText>
                  </NavItem>
                {/*
                  <NavItem eventKey="charts/linechart">
                    <NavText>Line Chart</NavText>
                </NavItem>
                */}
            </NavItem>
            <NavItem eventKey="Login">
                <NavIcon><i className="fab fa-linkedin-in SidebarIcon"/></NavIcon>
                <NavText><Link to="/Login">Login</Link></NavText>

            </NavItem>
        </SideNav.Nav>
      </SideNav>

        <Switch>
          <Route exact path="/" component = { MainPage } />
          <Route exact path="/Management" component = {ManagePage} />
          <Route exact path="/Login" component = {LoginPage} />
        </Switch>
  </Router>
  </>
    )
  );
}

export default Sidebar;
