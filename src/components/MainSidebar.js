import React from 'react';
/* Router and Route not used, but have to be here for Sidebar routing to work */
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

import styles from '../cssModules/MainSidebar.module.css'; // Need to put .module for CSS module files

/* Only separate the 2 bc SideNav needs to be stateful to have icon selected */
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
      <div>
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
      </div>
    );
  }
}

const RouterSideNav = withRouter(SideNav);

/* Handles the click and is basically div that holds NavIcon and/or NavText */
class NavItem extends React.Component {
  handleClick = () => {
    const { path, onClick } = this.props; /* itemId=of that NavItem AND onClick=function to call */
    onClick(path);
  }

  render() {
    const { active } = this.props;
    return (
      <div className={ styles.navitem }>
        <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
          <div></div>
          <p className={ styles.navtext }>{this.props.name}</p> {/* In icon, so hover works on both at once */}
        </Link>
      </div>
    );
  }
}

export const MainSidebar = () => (
  <div className={ styles.sidebar }>
    <RouterSideNav></RouterSideNav>
  </div>
)