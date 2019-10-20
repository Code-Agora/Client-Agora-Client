import React from 'react';
import styled from 'styled-components';
import { BottomNavbar } from './components/BottomNavbar';
import { Card } from 'react-bootstrap'; // Notice not reactstrap

/* Cards start on left side of cell in grid */
const GridWrapper = styled.div`
  margin-top: 1.5em;
  margin-left: 6em;
  margin-right: 6em; 
  display: grid;
  grid-template-columns: repeat(1, 1fr);  /* 2 columns, all equal in size */
  grid-auto-rows: minmax(80px, auto);    /* rows are size of 100px minimum */
  grid-gap: 20px;
  width: 70%; /* Changes size of cells. Use background prop to see effect */
  /* background: red; */
`;

const MyCard = styled(Card)`
  width: 1fr; /* The width of one entire column */
  border: 2px solid #9FFFCB;
  background-color: #010010;
  color: #9FFFCB;
`;

// Creates a functional component for us
export const Home = (props) => (
    <React.Fragment>
      <BottomNavbar title="Trending" />
      <GridWrapper>
        <MyCard>
          <Card.Body>
            <Card.Text>
              LNK2019: unresolved external symbol __imp_GetComName referenced in function
              “private: int __cdecl StartProcess::ComInit(void)”
            </Card.Text>
          </Card.Body>
        </MyCard>
        <MyCard>
          <Card.Body>
            <Card.Text>
              LNK2019: unresolved external symbol __imp_GetComName referenced in function
              “private: int __cdecl StartProcess::ComInit(void)”
            </Card.Text>
          </Card.Body>
        </MyCard>

        <MyCard>
          <Card.Body>
            <Card.Text>
              LNK2019: unresolved external symbol __imp_GetComName referenced in function
              “private: int __cdecl StartProcess::ComInit(void)”
            </Card.Text>
          </Card.Body>
        </MyCard>
      </GridWrapper>
    </React.Fragment>
)

/*export default function Home() {
    return (
        <div>
This is exactly same as above, keeping to learn js
        </div>
    )
}*/