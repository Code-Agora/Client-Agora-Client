import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap'; // Notice not reactstrap
import styled from 'styled-components';

// Create styles component to wrap everything in component

// Use backticks to use string (render it out). ES6 or ES7 feature
const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    a, .navbar-nav, .navbar-light .nav-link {
        color: #9FFFCB;

        &:hover {
            color: white;
        }
    }

    .navbar-brand {
        font-size: 1.4em;
        color: #9FFFCB;

        &:hover {
            color: white;
        }
    }

    .form-center {
        position: absolute !important;
        left: 25%;
        right: 25%;
    }
`;

export const NavigationBar = () => (
    // area-controls = in react-bootstrap docs, for accessibility, don't worry
    // ml-auto = left align links (bootstrap class)
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Code Agora</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Form className="form-center">
                <FormControl type="text" placeholder="Search" className="" />
            </Form>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)