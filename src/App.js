import React, { Component } from 'react';
import './App.css';
import './css/spa.css';
import './css/media.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
//import Header from './components/Header';
import Footer from './components/Footer';
// import NavbarInstance from './components/Navbar';
import SPA from './components/containers/SPA';
import BlogIndex from './components/blog/BlogIndex';
import VideoIndex from './components/video/VideoIndex';
import ReactGA from 'react-ga';

const ReactRouter = () => (
  <Router>
    <div className="Routes">
      <div className="App-header">
      </div>
      <br /><br /><br />
      <Switch>
        <Route exact path="/" component={SPA}/>
        <Route exact path="/portfolio" component={SPA}/>
        <Route exact path="/contact" component={SPA}/>
        <Route exact path="/blog" component={BlogIndex}/>
        <Route exact path="/videos" component={VideoIndex}/>
      </Switch>
    </div>
  </Router>
)

class App extends Component {
  render() {
    ReactGA.initialize('UA-102303776-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div className="App">

        < ReactRouter />
        <div className="footer">
          { Footer }
        </div>
    </div>
    );
  }
}

export default App;
