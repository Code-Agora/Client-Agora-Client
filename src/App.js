import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from './components/NavigationBar';
import './App.css';
import { Home } from './Home';
import { Popular } from './Popular';
import { NoMatch } from './NoMatch';
import Sidebar from './components/Sidebar'; // A default import. Using { } means named import

function App() {
  return (
    // React.Fragment = Basically div for react (need to wrap components)
    // Switch = so we can switch between different routes
    // Layout = takes in body as args(props.children) like a function (i took out)
    <React.Fragment>
      <Router>

        <NavigationBar />

        <Sidebar />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/popular" component={Popular} />
          <Route component={NoMatch} />
        </Switch>
        
      </Router>
    </React.Fragment>
  );
}

export default App;
