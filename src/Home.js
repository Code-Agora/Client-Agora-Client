import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './cssModules/Home.module.css'; // Need to put .module for CSS module files
import { Link } from "react-router-dom";

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
  }

  render() {
    const { data } = this.props;

    return (

      // Loop through questions data array
      data.map((q) => {
        return (
          <div className={ styles.infocard }>
            <Link to={{
              pathname: '/questions/' + q.title,
              state: {
                questionTitle: q.title,
                questionBody: q.body
              }
            }}>
              <p className={ styles.infotitle }>
                { q.title }
              </p>
            </Link>
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
export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // TODO: comment what each of these lines does
    fetch(`http://localhost:3001/api/questions`)
      .then(response => response.json())
      .then(responseJson => {
        // Set state to contain all questions data and last page for paginator
        this.setState({ data: responseJson.questions.data, lastPage: responseJson.questions.last_page });
      });
  }

  handlePageClick = data => {
    fetch(`http://localhost:3001/api/questions?page=${data.selected + 1}`)
      .then(response => response.json())
      .then(responseJson => {
        // Set state to contain all questions data and last page for paginator
        this.setState({ data: responseJson.questions.data, lastPage: responseJson.questions.last_page });
      });
  };

  render() {
    return (
      <React.Fragment>

        <div className={`${styles.infocardcontainer} col-sm-10`}>
          {/* Loops inside component and renders all InfoCards (answers, edits from following, etc) */}
          <InfoCard data={ this.state.data }></InfoCard>
        </div>

        <div className="col-sm-2">
          <SideCard></SideCard>
        </div>

        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />

      </React.Fragment>
    )
  }
}

/*export default function Home() {
    return (
        <div>
This is exactly same as above, keeping to learn js
        </div>
    )
}*/