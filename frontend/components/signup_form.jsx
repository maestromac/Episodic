const React = require('react'),
      ReactDom = require('react-dom'),
      SessionActions = require('../actions/session_actions'),
      SessionStore = require('../stores/session_store'),
      hashHistory = require('react-router').hashHistory,
      ErrorActions = require('../actions/error_actions'),
      ErrorStore = require('../stores/error_store');

const SignupForm = React.createClass({
  getInitialState () {
    return { username: '', password: '', verify: '', errors: [] };
  },

  componentDidMount () {
    this.listener1 = ErrorStore.addListener(this._onChange);
    this.listener2 = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount () {
    this.listener1.remove();
    this.listener2.remove();
  },

  _onChange () {
    this.setState({ errors: ErrorStore.errors('SignupForm') });
    if ( SessionStore.isUserLoggedIn() ) {
      hashHistory.push('/');
    }
  },

  handleSubmit (e) {
    e.preventDefault();
    if (this.state.password === this.state.verify) {
      SessionActions.signUp(this.state);
    } else {
      this.setState({ password: '',
        verify: '',
        errors: ["Password does not match!"] });
    }
  },

  handleUsernameChange (e) {
    e.preventDefault();
    this.setState({ username: e.target.value });
  },

  handlePasswordChange (e) {
    e.preventDefault();
    this.setState({ password: e.target.value });
  },

  handleVerifyPasswordChange (e) {
    e.preventDefault();
    this.setState({ verify: e.target.value });
  },

  render () {
    return (
      <div id="login">

        <h2>Sign Up</h2>
        <ul>
          {this.state.errors.map( (error, idx) => {
            return <li key={idx}>{error}</li>;
          })}
        </ul>
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
          <input
            type='password'
            value={this.state.verify}
            onChange={this.handleVerifyPasswordChange}
            placeholder='verify password'
            />
          <br />
          <input type="submit" value="Sign Up" />
        </form>

      </div>
    );
  }
});

module.exports = SignupForm;
