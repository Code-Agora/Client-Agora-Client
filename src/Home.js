import React from 'react'
import styled from 'styled-components';
import { Button, ButtonGroup } from 'react-bootstrap';

// Used for top most grid layout
const GridWrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    margin: 0 auto; /* horizontally centers the columns */
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(25px, auto); /* Changes row size in TopRect */
`;

// Creates a functional component for us
export const Home = () => (
    <GridWrapper>
        
    </GridWrapper>
)

/*export default function Home() {
    return (
        <div>
This is exactly same as above, keeping to learn js
        </div>
    )
}*/