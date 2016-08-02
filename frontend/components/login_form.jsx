const React = require('react'),
      ReactDom = require('react-dom'),
      SessionActions = require('../actions/session_actions'),
      SessionStore = require('../stores/session_store'),
      hashHistory = require('react-router').hashHistory,
      ErrorActions = require('../actions/error_actions'),
      ErrorStore = require('../stores/error_store');

const LoginForm = React.createClass({
  getInitialState () {
    return { username: '', password: '', errors: [] };
  },

  componentDidMount () {
    SessionStore.addListener(this._onChange);
    ErrorStore.addListener(this._onChange);
  },

  _onChange () {
    this.setState({ errors: ErrorStore.errors('LoginForm') });
    if ( SessionStore.isUserLoggedIn() ) {
      hashHistory.push('/');
    }
  },

  handleSubmit (e) {
    e.preventDefault();
    SessionActions.logIn(this.state);
  },

  handleUsernameChange (e) {
    e.preventDefault();
    this.setState({ username: e.target.value});
  },

  handlePasswordChange (e) {
    e.preventDefault();
    this.setState({ password: e.target.value});
  },

  render () {
    return (
      <div id="login-form">
        {this.state.errors}
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.username}
            onChange={this.handleUsernameChange}
            placeholder='Username'
            />
          <br />
          <input
            type='password'
            value={this.state.password}
            onChange={this.handlePasswordChange}
            placeholder='Password'
            />
          <br />
          <input type="submit" value="Log In" />
        </form>
      </div>
    );
  }
});

module.exports = LoginForm;
