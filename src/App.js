import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { TopHeader } from './components/TopHeader';
import { MainSidebar } from './components/MainSidebar';
import { Home } from './Home';
import { Popular } from './Popular';
import { NoMatch } from './NoMatch';

function App() {
  return (
    // React.Fragment = Basically div for react (need to wrap components)
    // Switch = so we can switch between different routes
    <React.Fragment>
      <Router>

        <TopHeader></TopHeader>

        <MainSidebar></MainSidebar>

        <div className="container">
          
          <div className="row">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/popular" component={Popular} />
              <Route component={NoMatch} />
            </Switch>
          </div>

        </div>

      </Router>
    </React.Fragment>
  );
}

export default App;
