import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/presentationals/Navbar';
import Quiz from './components/Quiz';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <div>   
        <Router>
          <div>
            <Navbar/>
            <Switch>
              <Route path="/quiz" component = {Quiz}></Route>
              <Route path="/profile/:bird" component = {Profile}></Route>
              <Route path="/" component = {Home}></Route>
            </Switch>
          </div>
       </Router>
      </div>
    );
  }
}

export default App;
