import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import { NavigationBar } from './components/NavigationBar';
import { Sidebar } from './components/Sidebar';

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
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
        
      </Router>
    </React.Fragment>
  );
}

export default App;
