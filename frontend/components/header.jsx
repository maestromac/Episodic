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
      <button onClick={this._onModalOpen.bind(this, true)}>Log In</button>
    );
    let signup =
      (<button onClick={this._onModalOpen.bind(this, false)}>Sign Up</button>
    );
    let logout = <button onClick={this.logOut}>Log Out</button>;
    let component = (this.state.logIn) ? <LoginForm /> : <SignupForm />;
    let session = (
      <div>
        {login} or {signup}

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this._onModalClose}
          style={ModalStyle}
          onAfterOpen={this._toggleOpague}
          >
          {component}
        </Modal>

      </div>
    );

    if (SessionStore.isUserLoggedIn()) {
      session = (
        <div>
          Greeting, {SessionStore.currentUser()}! {logout}
        </div>
      );
    }

    return (
      <div>
        {session}
        <h2>Episodic</h2>

      </div>
    );
  }

});
module.exports = Header;
