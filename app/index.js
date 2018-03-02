import React from 'react'
import ReactDOM from 'react-DOM'
import Posts from './Posts'
import Player from './Player'
import Welcome from './Welcome'
import {Router, Route, browserHistory, Link} from 'react-router'

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Welcome} />
    <Route path="/posts" component={Posts} />
    <Route path="/player" component={Player} />
  </Router>
)

ReactDOM.render(
  <App />, document.getElementById('root'));
