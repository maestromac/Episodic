import { Router, Route, IndexRoute, Link, hashHistory} from 'react-router';

const React = require('react'),
      ReactDOM = require('react-dom'),
      Modal = require('react-modal'),
      Header = require('./components/header'),
      SessionStore = require('./stores/session_store'),
      LoginForm = require('./components/login_form'),
      SignupForm = require('./components/signup_form'),
      SessionActions = require('./actions/session_actions'),
      StoriesIndex = require('./components/stories_index');


// dev test
// window.SessionApiUtil = require('./util/session_api_util.jsx');
// window.SessionActions = require('./actions/session_actions');
// window.StoryActions = require('./actions/story_actions');
// window.StoryStore = require('./stores/story_store');

const App = React.createClass({
  render () {
    return (
      <div>
        <Header />
        <div className="center">
          {this.props.children}
        </div>
      </div>
    );
  }
});

let _ensureLoggedIn = (nextState, replace) => {
  if (!SessionStore.isUserLoggedIn()) {
    replace('/login');
  }
};
// <Route path="login" component={LoginForm} />
// <Route path="signup" component={SignupForm} />
// onEnter={ _ensureLoggedIn }

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={StoriesIndex} />
    <Route path="/stories/:id" component={StoriesIndex} />
  </Route>
);


document.addEventListener('DOMContentLoaded', () => {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  Modal.setAppElement(document.getElementById('content'));
  ReactDOM.render(
    <Router history={hashHistory} routes={routes} />,
    document.getElementById('content')
  );
});
