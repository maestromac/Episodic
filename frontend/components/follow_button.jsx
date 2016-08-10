const React = require('react'),
      SessionStore = require('../stores/session_store'),
      SessionButton = require('./session_button'),
      FollowActions = require('../actions/follow_actions'),
      UserActions = require('../actions/user_actions');

const FollowButton = React.createClass({

  handleUnfollow () {
    UserActions.toggleUnfollow(this.props.followeeId);
  },

  handleFollow () {
    UserActions.toggleFollow(this.props.followeeId);
  },

  render () {

    let followButton;
    if (SessionStore.isUserLoggedIn()) {
      if (this.props.isFollowing) {
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
      followButton = <SessionButton name={"Follow"}/>;
    }

    return (
      <div className="user-view-following-status">
        {followButton}
      </div>
    );
  }
});

module.exports = FollowButton;
