const React = require('react'),
      SessionStore = require('../stores/session_store'),
      SessionButton = require('./session_button'),
      FollowActions = require('../actions/follow_actions'),
      UserActions = require('../actions/user_actions');

const FollowButton = React.createClass({
  getInitialState () {
    return { following: this.props.isFollowing };
  },

  handleUnfollow () {
    UserActions.fakeToggleUnfollow(this.props.id);
    this.setState({ following: false });
  },

  handleFollow () {
    UserActions.fakeToggleFollow(this.props.id);
    this.setState({ following: true });
  },

  render () {

    let followButton;
    if (SessionStore.isUserLoggedIn()) {
      if (this.state.following) {
        followButton = (
          <button
            className="following-button"
            onClick={this.handleUnfollow}>
              Following
          </button>
        );
      } else {
        followButton = (
          <button
            className="follow-button"
            onClick={this.handleFollow}>
              Follow
          </button>
        );
      }
    } else {
      followButton = (
        <div className="follow-button-special">
          <SessionButton name={"Follow"} />
        </div>
      );
    }

    return (
      <div className="user-view-following-status">
        {followButton}
      </div>
    );
  }
});

module.exports = FollowButton;
