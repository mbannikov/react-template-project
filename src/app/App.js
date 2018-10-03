import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Jumbotron } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './App.scss';

import TopMenu from 'src/components/TopMenu';
import MainPage from 'src/pages/Main';

const TOP_MENU = [
  { name: 'Main', url: '/' },
  { name: 'Page1', url: '/page1' },
  { name: 'Page2', url: '/page2' }
]

const Page404 = () => (
  <Container>
    <Jumbotron>
      <h1>Page not found</h1>
    </Jumbotron>
  </Container>
);

const ComingSoonPage = () => (
  <Container>
    <Jumbotron>
      <h1>Coming soon...</h1>
    </Jumbotron>
  </Container>
);

class App extends Component {
  render() {
    return (
      <div className="AppComponent">
        <TopMenu pages={ TOP_MENU } />

        <Switch>
          <Route path="/" exact component={ MainPage } />
          <Route path='/page1' exact component={ ComingSoonPage } />
          <Route path='/page2' exact component={ ComingSoonPage } />
          <Route component={ Page404 } />
        </Switch>
      </div>
    );
  }
}

export default App;
