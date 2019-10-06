import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import styled from "styled-components";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "../Home";

const MySideNav = styled(SideNav)`
  top: 56px;
  background-color: #222;
`;

/* Inline CSS */
const IconStyle = {
  fontSize: "1.75em"
};

export const Sidebar = () => (
  <Router>
    <MySideNav onSelect={selected => {}}>
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="">
          {/*I made this eventKey blank because it is required, but not used*/}
          <NavIcon>
            <Link to="/">
              {/* This Link refernces the router below */}
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </Link>
          </NavIcon>
        </NavItem>
        <NavItem eventKey="clock">
          <NavIcon>
            <i className="far fa-clock" style={IconStyle}></i>
          </NavIcon>
          <NavText>Devices</NavText>
        </NavItem>
      </SideNav.Nav>
    </MySideNav>

    {/* Routes */}
    <Route exact path="/" component={Home} />
  </Router>
);
