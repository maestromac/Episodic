import { Router, Route, IndexRoute, Link, hashHistory} from 'react-router';

const React = require('react'),
      ReactDOM = require('react-dom'),
      LoginForm = require('./components/login_form'),
      SignupForm = require('./components/signup_form'),
      SessionStore = require('./stores/session_store'),
      SessionActions = require('./actions/session_actions');


// dev test
// window.SessionApiUtil = require('./util/session_api_util.jsx');
// window.SessionActions = require('./actions/session_actions');

const App = React.createClass({
  getInitialState () {
    return { user: SessionStore.currentUser() };
  },

  componentDidMount () {
    this.listener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount () {
    this.listener.remove();
  },

  _onChange () {
    this.setState({ user: SessionStore.currentUser() });
  },

  logOut (e) {
    e.preventDefault();
    SessionActions.logOut();
    hashHistory.push('/');
  },

  render () {
    let login = <Link to={`/login`}>Log In</Link>;
    let signup = <Link to={`/signup`}>Sign Up</Link>;
    let logout = <button onClick={this.logOut}>Log Out</button>;
    let header = <div>{login} or {signup}</div>;
    let user = this.state.user;
    if (user) {
      header = (
        <div>
          Greeting, {user}! {logout}
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
