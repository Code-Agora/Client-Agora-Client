import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import styled from "styled-components";

import { BrowserRouter as Link } from "react-router-dom";

const MySideNav = styled(SideNav)`
  top: 56px;
  background-color: #222;
`;

const MyNavText = styled(NavText)`
  
`;

/* Inline CSS */
const IconStyle = {
  fontSize: "1.75em",
  /* width and height important, they define size of icon in sidebar. If too small, click will not work */
  width: "2.6em",
  height: "2em"
};

export const Sidebar = () => (
    <MySideNav onSelect={selected => {}}>
      <SideNav.Nav defaultSelected="home">
        {/* Set eventKey in order for icon to appear selected */}
        <NavItem eventKey="home">
          <NavIcon>
            {/* This Link references the router in App.js */}
            <Link to="/">
              <i className="fa fa-fw fa-home" style={ IconStyle } />
            </Link>
          </NavIcon>
        </NavItem>
        <NavItem eventKey="about">
          <NavIcon>
            <Link to="/about"> 
              <i className="far fa-clock" style={ IconStyle }></i>
            </Link> 
          </NavIcon>
          {/*<MyNavText>Devices</MyNavText>*/}
        </NavItem>
      </SideNav.Nav>
    </MySideNav>
);
