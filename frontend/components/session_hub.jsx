const React = require('react'),
      ReactDom = require('react-dom'),
      Modal = require('react-modal'),
      SessionActions = require('../actions/session_actions'),
      SessionStore = require('../stores/session_store'),
      hashHistory = require('react-router').hashHistory,
      ErrorActions = require('../actions/error_actions'),
      ErrorStore = require('../stores/error_store'),
      LoginForm = require('./login_form'),
      SignupForm = require('./signup_form');

const SessionHub = React.createClass({
  getInitialState () {
    return { temp: "" };
  },

  componentDidMount () {
    this.listener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount () {
    this.listener.remove();
  },

  _onChange () {
    if ( SessionStore.isUserLoggedIn() ) {
      // hashHistory.push('#');
      window.location.href = "/";
      // this.forceUpdate();
    }
  },

  _handleGuestLogIn () {
    SessionActions.logIn({ username: 'guest', password: 'password' });
  },

  _handleLogIn (e) {
    e.preventDefault();
    this.setState({ temp: "LoginForm" });
  },

  _handleSignUp (e) {
    e.preventDefault();
    this.setState({ temp: "SignupForm" });
  },

  render () {

    let content;

    if (this.state.temp === "") {
      content = (
       <div className="session-hub">
         <h3 className="session-web-title">Episodic</h3>
         <ul>
           <li><button className="session-hub-button guest" onClick={this._handleGuestLogIn}>Guest Login</button></li>
           <li><button className="session-hub-button" onClick={this._handleLogIn}>Sign In</button></li>
           <li><button className="session-hub-button" onClick={this._handleSignUp}>Sign Up</button></li>
         </ul>
       </div>
     );
   } else if (this.state.temp === "LoginForm") {
     content = <LoginForm />;
   } else if (this.state.temp === "SignupForm") {
     content = <SignupForm />;
   }

    return (
      <div>
        {content}
      </div>
    );
  }
});

module.exports = SessionHub;
