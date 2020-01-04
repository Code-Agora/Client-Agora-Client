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
  render() {
    return (
      <div className={ styles.infocardcontainer }>
        <div className={ styles.infocard }>
          <p className={ styles.infotitle }>
            Is it true that the demand for software developers is decreasing and that there
            is a saturation coming in this field?
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
            <div className={ styles.stat_block }>2 <span>views</span></div>
          </div>
        </div>
        
        <div className={ styles.infocard }>

        </div>
        <div className={ styles.infocard }>

        </div>
      </div>
    );
  }
}

// Creates a functional component for us
export const Home = (props) => (
  <React.Fragment>

        <div className="col-sm-10">
          {/* Loop here and render all InfoCards (answers, edits from following, etc) */}
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