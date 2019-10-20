import React from 'react'
import styled from 'styled-components';
import { BottomNavbar } from './components/BottomNavbar';
import { Card, Button } from 'react-bootstrap'; // Notice not reactstrap

const GridWrapper = styled.div`
  margin-top: 1em;
  margin-left: 5.5em;
  margin-right: 6em; 
  display: grid;
  grid-template-columns: repeat(12, 1fr); /* 12 columns, all equal in size */
  grid-auto-rows: minmax(100px, auto);    /* rows are size of 100px minimum */
  grid-gap: 10px; /* gap between elements in grid, but not on outsides */
`;

const MyCard = styled(Card)`
  width: 30em;
`;

// Creates a functional component for us
export const About = () => (
  <React.Fragment>
    <BottomNavbar title="About" />
    <GridWrapper>
      <MyCard>
        <Card.Body>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
      </MyCard>
      <MyCard>
        <Card.Body>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
      </MyCard>
    </GridWrapper>
  </React.Fragment>
)