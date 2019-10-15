import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-top: 1em;
    margin-left: 6em;
    margin-right: 6em; 
`;

// Creates a functional component for us
export const NoMatch = () => (
    <Wrapper>
        <h2>No Match</h2>
    </Wrapper>
)