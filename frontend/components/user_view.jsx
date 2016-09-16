import { Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import Avatar from 'react-avatar';

const React = require('react'),
      SessionStore = require('../stores/session_store'),
      SessionActions = require('../actions/session_actions'),
      UserActions = require('../actions/user_actions'),
      UserStore = require('../stores/user_store'),
      StoriesIndex = require('./stories_index'),
      SessionButton = require('./session_button'),
      FollowButton = require('./follow_button'),
      FollowCountsButton = require('./follow_counts_button');


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

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  createLink (name) {
    return (
      <li className={this.matchLinkWithURL(name)}>
        <Link to={`/user/${this.state.user.id}/${name}`}>
          {this.capitalizeFirstLetter(name)}
        </Link>
      </li>
    );
  },

  renderView () {
    if (this.state.user) {
      return (
        <div>
          <div className="user-view-plate">
            <div className="center">
              <div className="user-view">
                {this.renderLoadedView()}
              </div>
                <ul className="user-view-links">
                  {this.createLink("stories")}
                  {this.createLink("comments")}
                  {this.createLink("likes")}
                </ul>
            </div>
          </div>
          {this.renderPublished()}
        </div>
      );
    } else {
      return (<div></div>);
    }
  },

  renderLoadedView () {
    let user = this.state.user;
    return (
      <div>
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

        <ul className="user-view-followings-followers">
          <li>
            <FollowCountsButton
              name={ `${user.followees_count} Followings` }
              users={user.followees}/>
          </li>
          <li>
            <FollowCountsButton
              name={ `${user.followers_count} Followers` }
              users={user.followers}/>
          </li>
        </ul>

        {
          user.id !== SessionStore.currentUser().id ?
            <FollowButton
                isFollowing={user.followed}
                followeeId={this.props.routeParams.id} /> : ""
        }
      </div>
    );

  },

  renderPublished () {
    return (
      <div className="user-view-plate-published">
        {
          React.Children.map(this.props.children,
           (child) => React.cloneElement(child, {
             authorId: this.state.user.id,
           })
          )
        }
      </div>
    );
  },

  render () {
    return (
      <div>
        {this.renderView()}
      </div>
    );
  }

});

module.exports = UserView;
