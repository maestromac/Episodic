import { Router, Route, IndexRoute, Link, hashHistory} from 'react-router';

const React = require('react'),
      ReactDOM = require('react-dom'),
      LoginForm = require('./components/login_form'),
      SignupForm = require('./components/signup_form');


// dev test
// window.SessionApiUtil = require('./util/session_api_util.jsx');
// window.SessionActions = require('./actions/session_actions');

const App = React.createClass({
  render () {
    return (
      <div>
        <h2>Episodic</h2>
        Temp links
        <br />
        <Link to={`/login`}>Log In</Link>
        <br />
        <Link to={`/signup`}>Sign Up</Link>
        <br /><br />
        {this.props.children}
      </div>
    );
  }
});

const routes = (
  <Route path="/" component={App}>
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={SignupForm} />
  </Route>
);


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router history={hashHistory} routes={routes} />,
    document.getElementById('content')
  );
});
