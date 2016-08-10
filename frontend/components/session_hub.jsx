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

  guestLogin () {
    SessionActions.logIn({ username: 'guest', password: 'password' });
  },

  _handleGuestLogIn (e) {
    e.preventDefault();
    this.guestLogin();
  },

  _handleLogIn (e) {
    e.preventDefault();
    // this.content = <LoginForm />;
    this.setState({ temp: "LoginForm" });
  },

  _hnaldeSignUp (e) {
    e.preventDefault();
    // this.content = <SignupForm />;
    this.setState({ temp: "SignupForm" });
  },

  render () {
    let content;

    if (this.state.temp === "") {
      content = (
       <div>
         <h3>where are my buttons</h3>
         <ul>
           <li><button onClick={this._handleGuestLogIn}>Guest Login</button></li>
           <li><button onClick={this._handleLogIn}>Sign In</button></li>
           <li><button onClick={this._hnaldeSignUp}>Sign Up</button></li>
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
