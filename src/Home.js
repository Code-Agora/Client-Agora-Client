import React from 'react';
import styles from './cssModules/Home.module.css'; // Need to put .module for CSS module files

class SideCard extends React.Component {
  render() {
    return (
      <div className={ styles.sidecard }>
        
      </div>
    );
  }
}

class InfoCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [], // data holds info on everything basically, question title, user, body, etc
      //questions: require("./MOCK_DATA.json"), // Taking in entire array of questions data from JSON
      activeSort: 'default', // On start, sort by default (all questions on site if no following)
      options: ['default', 'popular', 'recent'],
    };
  }

  componentDidMount() {
    // TODO: comment what each of these lines does
    fetch(`http://localhost:3001/api/questions`)
      .then(response => response.json())
      .then(responseJson => {
        // Set state to contain all questions data
        this.setState({ data: responseJson.questions.data });
      });
  }

  render() {
    const { data } = this.state;

    return (

      // Loop through questions data array
      data.map((q) => {
        return (
          <div className={ styles.infocard }>
            <p className={ styles.infotitle }>
              { q.title }
            </p>
            <div className={ styles.infotags }>
              <span className={ styles.tag }>Python</span>
              <span className={ styles.tag }>Django</span>
              <span className={ styles.tag }>Yaga Yeet</span>
              <span className={ styles.tag }>Something</span>
              <span className={ styles.tag }>A TAGGGG</span>
            </div>
            <p className={ styles.infouser }>asked 33 mins ago by CoderXxX</p>
            <div className={ styles.mainstatsrect }>
              <div className={ styles.stat_block }>0 <span>votes</span></div>
              <div className={ styles.stat_block }>1 <span>answers</span></div>
              <div className={ styles.stat_block }>{ q.view_count } <span>views</span></div>
            </div>
          </div>
        )
      }
      )
        
    );
  }
}

// Creates a functional component for us
export const Home = (props) => (
  <React.Fragment>

        <div className={`${styles.infocardcontainer} col-sm-10`}>
          {/* Loops inside component and renders all InfoCards (answers, edits from following, etc) */}
          <InfoCard></InfoCard>
        </div>

        <div className="col-sm-2">
          <SideCard></SideCard>
        </div>

  </React.Fragment>
)

/*export default function Home() {
    return (
        <div>
This is exactly same as above, keeping to learn js
        </div>
    )
}*/