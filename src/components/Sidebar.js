import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import styled from 'styled-components';

const MySideNav = styled(SideNav)`
    top: 56px;
    background-color: #222;
`;

/* Inline CSS */
const IconStyle = {
    fontSize: '1.75em',
}

export const Sidebar = () => (
    <MySideNav
        onSelect={(selected) => {
            
        }}
    >
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Home
                </NavText>
            </NavItem>
            <NavItem eventKey="clock">
                <NavIcon>
                    <i className="far fa-clock" style={ IconStyle }></i>
                </NavIcon>
                <NavText>
                    Devices
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </MySideNav>
)