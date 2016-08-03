const React = require('react'),
      ReactDom = require('react-dom'),
      Modal = require('react-modal'),
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
    this.listener1 = SessionStore.addListener(this._onChange);
    this.listener2 = ErrorStore.addListener(this._onChange);
  },

  componentWillUnmount () {
    this.listener1.remove();
    this.listener2.remove();
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

  guestLogin () {
    SessionActions.logIn({ username: 'guest', password: 'password' });
  },

  render () {
    return (
      <div className="login-form">

        <h2>Log In</h2>

        <ul className="error">
          {this.state.errors.map( (error, idx) => {
            return <li key={idx}>{error}</li>;
          })}
        </ul>

        <form onSubmit={this.handleSubmit} >
          <input
            className="username"
            type='text'
            value={this.state.username}
            onChange={this.handleUsernameChange}
            placeholder='Username'
            />
          <br />
          <input
            className="password"
            type='password'
            value={this.state.password}
            onChange={this.handlePasswordChange}
            placeholder='Password'
            />
          <br />
          <input className="button login" type="submit" value="Log In" />
        </form>
        <button
          className="button guest"
          onClick={this.guestLogin}>
          Guest Log In</button>
      </div>
    );
  }
});

module.exports = LoginForm;
