import React from 'react'
import styled from 'styled-components';
import { BottomNavbar } from './components/BottomNavbar';

const Wrapper = styled.div`
    margin-top: 1em;
    margin-left: 6em;
    margin-right: 6em; 
`;

// Creates a functional component for us
export const NoMatch = () => (
    <React.Fragment>
        <BottomNavbar title="No Match" />
        <Wrapper>
            <h2>No Match</h2>
        </Wrapper>
    </React.Fragment>
)