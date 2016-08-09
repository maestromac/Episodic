import { Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import Avatar from 'react-avatar';

const React = require('react'),
      SessionStore = require('../stores/session_store'),
      SessionActions = require('../actions/session_actions'),
      UserActions = require('../actions/user_actions'),
      UserStore = require('../stores/user_store'),
      StoriesIndex = require('./stories_index');


const UserView = React.createClass({
  getInitialState () {
    this.id = parseInt(this.props.params.id);
    return { user: UserActions.fetchUser(this.id) };
  },

  componentDidMount () {
    this.listener = UserStore.addListener(this._onChange);
    UserActions.fetchUser(this.id);
  },

  componentWillReceiveProps (nextProps) {
    this.id = parseInt(nextProps.routeParams.id);
    UserActions.fetchUser(this.id);
  },

  _onChange () {
    this.setState({ user: UserStore.user() });
  },

  componentWillUnmount () {
    this.listener.remove();
  },

  matchLinkWithURL (category) {
    if (this.props.location.pathname.indexOf(category.toLowerCase()) !== -1) {
      return "user-view-links-active";
    } else {
      return "";
    }
  },

  render () {

    let user = this.state.user;
    let content = (<div><h2>loading</h2></div>);

    if (user) {
      content = (
        <div>
          <div className="user-view-plate">
            <div className="center">
              <div className="user-view">

                <div className="user-view-profile">
                  <ul>
                    <h1>{user.pen_name}</h1>
                    <li>{user.description}</li>
                  </ul>

                  <Avatar
                  className="use-view-plate-avatar"
                  size={100}
                  round={true}
                  src={user.avatar} />
                </div>


              </div>
              <div>
                <ul className="user-view-links">

                  <li className={this.matchLinkWithURL("stories")}>
                    <Link to={`/user/${user.id}/stories`}>Stories</Link>
                  </li>

                  <li className={this.matchLinkWithURL("comments")}>
                    <Link to={`/user/${user.id}/comments`}>Comments</Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>

          <div className="user-view-plate-published">
            {
              React.Children.map(this.props.children,
               (child) => React.cloneElement(child, {
                 authorId: user.id
               })
              )
            }
          </div>

        </div>
      );
    }

    return (
      <div>

        {content}

      </div>
    );
  }
});

module.exports = UserView;
