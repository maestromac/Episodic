import { Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import Avatar from 'react-avatar';

const React = require('react'),
      ReactDOM = require('react-dom'),
      Modal = require('react-modal'),
      ModalStyle = require('./modal_style'),
      LoginForm = require('./login_form'),
      SignupForm = require('./signup_form'),
      SessionStore = require('../stores/session_store'),
      SessionActions = require('../actions/session_actions'),
      StoriesIndex = require('./stories_index'),
      SessionHub = require('./session_hub');

const Header = React.createClass({
  getInitialState() {
    return { modalOpen: false, options: "pop-over-hidden" };
  },

  _onModalOpen () {
    this.setState({ modalOpen: true });
  },

  _onModalClose () {
    this.setState({ modalOpen: false });
    ModalStyle.content.opacity = 0;
  },

  componentDidMount () {
    this.listener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount() {
    this.listener.remove();
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

  handleOptionClick () {
    let change;
    if (this.state.options === "pop-over-hidden") {
      change = "pop-over";
    } else {
      change = "pop-over-hidden";
    }
    this.setState({ options: change });
  },

  render () {
    let logout = <button onClick={this.logOut}>Log Out</button>;
    let write = (
      <a onClick={this._onModalOpen}>Write a story</a>
    );
    let login = (
      <a onClick={this._onModalOpen}>Log In</a>
    );
    let signup = (
      <a onClick={this._onModalOpen}>Sign Up</a>
    );

    let session = (
      <nav>
        <ul>
          <li>{write}</li>
          <li>{login} / {signup}</li>
        </ul>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this._onModalClose}
          style={ModalStyle}
          onAfterOpen={this._toggleOpague}
          >
          <SessionHub />
          <button
            className="modal-button"
            onClick={this._onModalClose}>
            X
          </button>
        </Modal>

      </nav>
    );
    let metabarLower = (
      <ul>
        <li>Editor's Pick</li>
        <li>Popular</li>
        <li>Feed</li>
        <li>Horror</li>
        <li>Fiction</li>
      </ul>
    );

    if (this.props.path !== "/") {
      metabarLower = "";
    }

    if (SessionStore.isUserLoggedIn()) {
      session = (
        <nav>
          <ul>
            <li><Link to={'/new-story'}>Write a story</Link></li>
            <li>
              <Link to={`/user/${SessionStore.currentUser().id}`}>
                {SessionStore.currentUser().pen_name}
              </Link>
            </li>


              <li className="meta-bar-avatar" onClick={this.handleOptionClick}>
                  <Avatar
                    key={SessionStore.currentUser().id}
                    size={33}
                    round={true}
                    src={SessionStore.currentUser().avatar} />

                    <div className="rock-solid">
                        <span className={this.state.options}
                          onClick={this.handleOptionClick}/>
                        <ul className={this.state.options}>
                          <div className="triangle-up-gray"/>
                          <div className="triangle-up-white"/>

                          <li>
        <Link to={`/new-story`}>New Story</Link>
                          </li>

                          <li>
        <Link to={`/user/${SessionStore.currentUser().id}/drafts`}>Drafts</Link>
                          </li>

                          <li>
        <Link to={`/user/${SessionStore.currentUser().id}/stories`}>Stories</Link>
                          </li>

                          <li>
        <Link to={`/user/${SessionStore.currentUser().id}`}>Profile</Link>
                          </li>

                          <li>
                      {logout}
                          </li>

                        </ul>

                    </div>
              </li>


          </ul>
        </nav>
      );
    }

    return (
      <div className="meta-bar">
        <header className="center">

          <div className="meta-bar-upper">
            <Link to={'/'}><h1 className="web-title">Episodic</h1></Link>
            {session}
          </div>

          <div className="meta-bar-lower">
            {metabarLower}
          </div>

        </header>
      </div>
    );
  }

});
module.exports = Header;
