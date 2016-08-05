import { Router, Route, IndexRoute, Link, hashHistory} from 'react-router';

const React = require('react'),
      ReactDOM = require('react-dom'),
      Modal = require('react-modal'),
      ModalStyle = require('./modal_style'),
      LoginForm = require('./login_form'),
      SignupForm = require('./signup_form'),
      SessionStore = require('../stores/session_store'),
      SessionActions = require('../actions/session_actions'),
      StoriesIndex = require('./stories_index');

const Header = React.createClass({
  getInitialState() {
    return { modalOpen: false, logIn: false };
  },

  _onModalOpen (boolean) {
    this.setState({ modalOpen: true , logIn: boolean });
  },

  _onModalClose () {
    this.setState({ modalOpen: false });
    ModalStyle.content.opacity = 0;
  },

  componentDidMount () {
    this.listener = SessionStore.addListener(this._onChange);
  },

  _onChange () {
    if (!SessionStore.isUserLoggedIn()) {
      hashHistory.push('/');
    }
  },

  _toggleOpague () {
    ModalStyle.content.opacity = 100;
  },

  logOut (e) {
    e.preventDefault();
    SessionActions.logOut();
    this.setState({ modalOpen: false });
    ModalStyle.content.opacity = 0;
  },

  render () {

    let login = (
      <a onClick={this._onModalOpen.bind(this, true)}>Log In</a>
    );
    let signup = (
      <a onClick={this._onModalOpen.bind(this, false)}>Sign Up</a>
    );
    let logout = <button onClick={this.logOut}>Log Out</button>;
    let component = (this.state.logIn) ? <LoginForm /> : <SignupForm />;
    let session = (
      <nav>
        <ul>
          <li>Write a story</li>
          <li>{login} / {signup}</li>
        </ul>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this._onModalClose}
          style={ModalStyle}
          onAfterOpen={this._toggleOpague}
          >
          {component}
          <button
            className="modal-button"
            onClick={this._onModalClose}>
            X
          </button>
        </Modal>

      </nav>
    );

    if (SessionStore.isUserLoggedIn()) {
      session = (
        <nav>
          <ul>
            <li>Write a story</li>
            <li>{SessionStore.currentUser()} {logout}</li>
          </ul>
        </nav>
      );
    }

    return (
      <header>
        <h1 className="web-title">Episodic</h1>
        {session}

      </header>
    );
  }

});
module.exports = Header;
