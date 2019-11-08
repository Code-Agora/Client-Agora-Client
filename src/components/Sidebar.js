import React from "react";
import styled from "styled-components";
/* Router and Route not used, but have to be here for Sidebar routing to work */
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  position: fixed; /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;    /* Full-height: remove this if you want "auto" height */
  width: 75px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 3.4em;      /* Stay at the top */
  background-color: #010010; /* Blackish-blue */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
`;

/* Uses styled component to give CSS. Only separate the 2 bc SideNav needs to be stateful to have icon selected */
class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: props.location.pathname, // Vars come from Router. Can use bc withRouter()
      items: [
        {
          path: '/', /* path is used as id to check which NavItem is active basically */
          name: 'Home',
          css: 'fas fa-home',
          key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
        },
        {
          path: '/popular',
          name: 'Popular',
          css: 'fas fa-fire',
          key: 2
        },
        {
          path: '/NoMatch',
          name: 'Following',
          css: 'fas fa-flag',
          key: 3
        },
      ]
    }
  }

  onItemClick = (path) => {
    this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
  }

  render() {
    const { items, activePath } = this.state;
    return (
      <StyledSideNav>
        {
          /* items = just array AND map() loops thru that array AND item is param of that loop */
          items.map((item) => {
            /* Return however many NavItems in array to be rendered */
            return (
              <NavItem
                path={item.path}
                name={item.name}
                css={item.css}
                onClick={this.onItemClick} /* Simply passed an entire function to onClick prop */
                active={item.path === activePath}
                key={item.key}
              />
            )
          
          })
        }
        {/* Leaving this here as reminder of how I found better solution
        <NavItem path="/" css="fa fa-fw fa-home"></NavItem>
        <NavItem path="/about" css="fa fa-fw fa-clock"></NavItem>
        <NavItem path="/NoMatch" css="fas fa-hashtag"></NavItem> 
        */}
      </StyledSideNav>
    );
  }
}

// This component is needed so SideNav can use.
// withRouter() gives SideNav access to Router's props.location.pathname
const RouterSideNav = withRouter(SideNav);

/* NavItem is container for either both NavIcon and NavText OR just NavIcon */
const StyledNavItem = styled.div`
  height: 70px; /* width and height must be same size as NavBar to center...actually, not height, but keeps it square */
  width: 75px;
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */

  /* <Link> tag uses anchor, so style <a> to style Link/icon */
  a {
    font-size: 2.7em;
    color: #9FFFCB;
    /*color: "#9FFFCB"};*/
    color: ${(props) => props.active ? "white" : "#9FFFCB"};

    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    }
  }
`;

/* Handles the click and is basically div that holds NavIcon and/or NavText */
class NavItem extends React.Component {
  handleClick = () => {
    const { path, onClick } = this.props; /* itemId=of that NavItem AND onClick=function to call */
    onClick(path);
  }

  render() {
    const { active } = this.props;
    return (
      <StyledNavItem active={active}>
        <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
          <NavIcon></NavIcon>
          <NavText>{this.props.name}</NavText> {/* In icon, so hover works on both at once */}
        </Link>
      </StyledNavItem>
    );
  }
}

/* Only separating this in case I also create NavText, otherwise, just need NavItem and no NavIcon */
const NavIcon = styled.div`
  
`;

const NavText = styled.p`
  font-size: 0.25em;
  margin-top: 2px;
`;

export default class Sidebar extends React.Component {
  render() {
    return (
      /* Since Sidebar is inside <Router>, declaring RSN here gives it access to Router (only bc withRouter()) */
      <RouterSideNav></RouterSideNav>
    );
  }
}
