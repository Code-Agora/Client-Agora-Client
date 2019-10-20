import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap'; // Notice not reactstrap
import styled from 'styled-components';

// Create styles component to wrap everything in component

// Use backticks to use string (render it out). ES6 or ES7 feature
const Styles = styled.div`
    .navbar {
        background-color: #010010;
        left: 75px; /* Puts BottomNavbar to left of Sidebar */
        border-top: 2px solid #9FFFCB;
        border-left: 2px solid #9FFFCB;
    }

    .navbar-brand {
        font-size: 1.4em;
        color: #9FFFCB;

        &:hover {
            color: white;
        }
    }
`;

/* I would prefer to create my own, but gonna try it this way first */
export const BottomNavbar = (props) => (
    // area-controls = in react-bootstrap docs, for accessibility, don't worry
    // ml-auto = left align links (bootstrap class)
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand>{ props.title }</Navbar.Brand>
        </Navbar>
    </Styles>
)