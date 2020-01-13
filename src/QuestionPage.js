import React, { Component } from 'react';
import styles from './cssModules/QuestionPage.module.css'; // Need to put .module for CSS module files

class SideCard extends React.Component {
  render() {
    return (
      <div className={ styles.sidecard }>
        
      </div>
    );
  }
}

export class QuestionPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { questionTitle, questionBody } = this.props.location.state

    return (
      <React.Fragment>

        <div className={`${styles.leftcolcontainer} col-sm-10`}>
          <p className={ styles.qpTitle }>{ questionTitle }</p>
          <p className={ styles.qpBody }>{ questionBody }</p>
        </div>

        <div className="col-sm-2">
          <SideCard></SideCard>
        </div>

      </React.Fragment>
    )
  }

}