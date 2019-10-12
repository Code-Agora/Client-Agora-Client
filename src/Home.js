import React from 'react'
import styled from 'styled-components';

// Used for top most grid layout
const GridWrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    margin-top: 1em;
    margin-left: 5.5em;
    margin-right: 5.5em; 
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(25px, auto); /* Changes row size in TopRect */
`;

// Creates a functional component for us
export const Home = (props) => (
    <GridWrapper>
        <p>This is a paragraph and I am writing on the home page</p>
        <p>This is another paragraph, hi hey hello whatsup yo</p>
    </GridWrapper>
)

/*export default function Home() {
    return (
        <div>
This is exactly same as above, keeping to learn js
        </div>
    )
}*/