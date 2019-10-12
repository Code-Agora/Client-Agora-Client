import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-top: 1em;
    margin-left: 5.5em;
    margin-right: 5.5em; 
`;

// Creates a functional component for us
export const NoMatch = () => (
    <Wrapper>
        <h2>No Match</h2>
    </Wrapper>
)