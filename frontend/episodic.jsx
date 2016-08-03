import { Router, Route, IndexRoute, Link, hashHistory} from 'react-router';

const React = require('react'),
      ReactDOM = require('react-dom'),
      LoginForm = require('./components/login_form'),
      SignupForm = require('./components/signup_form'),
      SessionStore = require('./stores/session_store'),
      SessionActions = require('./actions/session_actions'),
      StoriesIndex = require('./components/stories_index');


// dev test
// window.SessionApiUtil = require('./util/session_api_util.jsx');
// window.SessionActions = require('./actions/session_actions');

const App = React.createClass({
  componentDidMount () {
    this.listener = SessionStore.addListener(this._onChange);
  },

  _onChange () {
    if (!SessionStore.isUserLoggedIn()) {
      hashHistory.push('/');
    }
  },

  logOut (e) {
    e.preventDefault();
    SessionActions.logOut();
  },

  render () {
    let login = <Link to={`/login`}>Log In</Link>;
    let signup = <Link to={`/signup`}>Sign Up</Link>;
    let logout = <button onClick={this.logOut}>Log Out</button>;
    let header = <div>{login} or {signup}</div>;
    if (SessionStore.isUserLoggedIn()) {
      header = (
        <div>
          Greeting, {SessionStore.currentUser()}! {logout}
        </div>
      );
    }

    return (
      <div>
        {header}
        <h2>Episodic</h2>
        {this.props.children}
      </div>
    );
  }
});

let _ensureLoggedIn = (nextState, replace) => {
  if (!SessionStore.isUserLoggedIn()) {
    debugger
    replace('/login');
  }
};

const routes = (
  <Route path="/" component={App}>
    <Route path="login" component={LoginForm} />
    <Route path="signup" component={SignupForm} />
    <Route
      path="stories"
      component={StoriesIndex}
      onEnter={ _ensureLoggedIn } />
  </Route>
);


document.addEventListener('DOMContentLoaded', () => {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  ReactDOM.render(
    <Router history={hashHistory} routes={routes} />,
    document.getElementById('content')
  );
});
