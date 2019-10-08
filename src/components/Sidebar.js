import React from "react";
import styled from "styled-components";
/* Router and Route not used, but have to be here for Sidebar routing to work */
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/* This defines the actual bar going down the screen */
const SideNav = styled.div`
  position: fixed; /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 60px; /* Set the width of the sidebar */
  z-index: 1; /* Stay on top of everything */
  top: 3.4em; /* Stay at the top */
  left: 0;
  background-color: #222; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 10px;
`;

/* NavItem is container for either both NavIcon and NavText OR just NavIcon */
const NavItem = styled.div`
  height: 60px;
  width: 60px;
`;

const NavIcon = styled.div`
  /* Link tag uses anchor, so style a to style Link/icon */
  a {
    font-size: 2.75em;
    color: #9FFFCB;
    margin-left: 2px;
  }
`;

export const Sidebar = () => (
  <SideNav>
    <NavItem>
      <NavIcon>
        {/*<a href="/" className="fa fa-fw fa-home"></a>*/}
        <Link to="/" className="fa fa-fw fa-home"></Link>
      </NavIcon>
    </NavItem>
    <NavItem>
      <NavIcon>
        {/* Putting fa-icon on NavIcon does not work, but this does */}
        <Link to="/about" className="fa fa-fw fa-clock"></Link>
      </NavIcon>
    </NavItem>
    <NavItem>
      <a href="#">Clients</a>
    </NavItem>
    <NavItem>
      <a href="/about">Contact</a>
    </NavItem>
  </SideNav>
);
