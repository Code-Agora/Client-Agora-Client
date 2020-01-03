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
      <div>
        <div className={ styles.infocard }>
          <p className={ styles.infotitle }>
            Is it true that the demand for software developers is decreasing and that there
            is a saturation coming in this field?
          </p>
          <div className={ styles.infouser }>
            <div className={ styles.userimg }>
              <img src={ process.env.PUBLIC_URL + '/images/avatar.png' } alt="MISSING img" width="40px" height="40px"></img> {/* User's image */}
            </div>
            <div className={ styles.usertxt }>
              <p>Austin Smith, Texas State University</p>
              <p>Answered December 23</p>
            </div>
            <p className={ styles.infotext }>
              Because this could easily be a “license to print money”.
              If they can pull off the launch of 12,000 satellites (and it seems likely that they can) - then they’ll have the first and only high bandwidth
            </p>
          </div>
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
    <div className="container">
      <div className="row">
        <div className="col-sm-2">
          
        </div>

        <div className="col-sm-8">
          <input type="text" placeholder="What is your question?" className={ styles.ask }></input>
          {/* Loop here and render all InfoCards (answers, edits from following, etc) */}
          <InfoCard></InfoCard>
        </div>

        <div className="col-sm-2">
          <SideCard></SideCard>
        </div>
      </div>
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