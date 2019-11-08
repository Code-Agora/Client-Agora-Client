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
  grid-template-columns: repeat(2, 1fr);  /* 2 columns, all equal in size */
  grid-auto-rows: minmax(170px, auto);    /* rows are size of 100px minimum */
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

// This div contains 3 divs. Will be at very bottom of card. Will be full width of card
const MainStatsRect = styled.div`
  /*background: red;*/
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 50px;
  text-align: center;
  border-top: 1px solid #9FFFCB;
  height: 30%;
`;

// Is a div inside of Card Body that holds all 3 stats (votes, answers, views)
class Stats extends React.Component {
  render() {
    return (
      <MainStatsRect>
        <div> {/* div for the # of votes */}
          0<br></br>Votes
        </div>
        <div> {/* div for the # of answers */}
          0<br></br>Answers
        </div>
        <div> {/* div for the # of views */}
          0<br></br>Views
        </div>
      </MainStatsRect>
    );
  }
}

const Tag = styled.div`
    background: #77B6EA;
    color: #69626D;
    border-radius: 5px;
    color: white;
    padding: 1px;
    margin: 2px 2px 2px 2px;
    letter-spacing: 1px;
    text-align: center;
    cursor: pointer;
    font-size: 12px;
`;

const StyledTagBody = styled.div`
  /*background: green;*/
  position: absolute; /* Only way I could get in correct position..a lil hacky */
  left: 70%; /* Moves TagBody to right side of MyCard */
  width: 30%; /* 20% width of MyCard */
  height: 70%; /* 70% height of MyCard (Lines up with stats rect) */
  margin-right: 10px;
`;

class TagBody extends React.Component {
  render() {
    return (
      <StyledTagBody>
        {/* Loop through and display tags here */}
        <Tag>python</Tag>
        <Tag>java</Tag>
        <Tag>react</Tag>
        <Tag>css</Tag>
      </StyledTagBody>
    );
  }
}

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: require("./MOCK_DATA.json"), // Taking in entire array of questions data from JSON
      activeSort: 'default', // On start, sort by default (all questions on site if no following)
      options: ['default', 'popular', 'recent'],
    }
  }

  // Render all of the questions based on information sent from backend
  render() {
    const { questions } = this.state;
    
    return ( // <Questions> is returning multiple cards (having question data on them)
      // Loop through questions data array
      questions.map((q) => {
        return (
          <MyCard key={q.key}>
            <Card.Body style={{ width: "70%" }}>
              <Card.Text>
                { q.title }
              </Card.Text>
            </Card.Body>
            <TagBody></TagBody>
            <Stats></Stats> {/* Should be all 3 stats (votes, answers, views) */}
          </MyCard>
        )
      }

      )
    );
  }
}

// Creates a functional component for us
export const Home = (props) => (
    <React.Fragment>
      <BottomNavbar title="All Questions" />
      <GridWrapper>

        <Questions></Questions>

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