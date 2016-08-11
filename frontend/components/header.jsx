import { Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import Avatar from 'react-avatar';

const React = require('react'),
      ReactDOM = require('react-dom'),
      SessionStore = require('../stores/session_store'),
      SessionActions = require('../actions/session_actions'),
      StoriesIndex = require('./stories_index'),
      SessionButton = require('./session_button');

const Header = React.createClass({
  getInitialState() {
    return { modalOpen: false, options: "pop-over-hidden", temp: "" };
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

  matchLinkWithURL (category) {
    if (this.props.path.indexOf(category.toLowerCase()) !== -1) {
      return "user-view-links-active";
    } else {
      return "";
    }
  },

  logOut (e) {
    e.preventDefault();
    SessionActions.logOut();
    this.setState({ modalOpen: false });
    // ModalStyle.content.opacity = 0;
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

    let session = (
      <nav>
        <ul>
          <li><SessionButton name={"Write a story"} /></li>
          <li><SessionButton name={"Log In / Sign Up"} /></li>
        </ul>
      </nav>
    );
    let feed = SessionStore.isUserLoggedIn() ?
      <Link to={`/feed`}>Feed</Link> : <SessionButton name={`Feed`} />;

    let logout = <button onClick={this.logOut}>Log Out</button>;
    let metabarLower = (
      <ul>
        <li>Editor's Pick</li>
        <li>Popular</li>

        <li className={this.matchLinkWithURL("feed")}>
          {feed}
        </li>

        <li>Horror</li>
        <li>Fiction</li>
      </ul>
    );

    if (this.props.path !== "/" && this.props.path !== "/feed" ) {
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
                    <Link to={`/user/${SessionStore.currentUser().id}/stories`}>
                      Stories
                    </Link>
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
