const React = require('react'),
      SessionStore = require('../stores/session_store'),
      SessionButton = require('./session_button'),
      FollowActions = require('../actions/follow_actions');

const FollowButton = React.createClass({

  handleUnfollow () {
    FollowActions.toggleUnfollow(this.props.followeeId);
  },

  handleFollow () {
    FollowActions.toggleFollow(this.props.followeeId);
  },

  render () {

    let followButton;
    if (SessionStore.isUserLoggedIn()) {
      if (this.props.isFollowing) {
        followButton = (
          <button onClick={this.handleUnfollow}>Following</button>
        );
      } else {
        followButton = (
          <button onClick={this.handleFollow}>Follow</button>
        );
      }
    } else {
      followButton = <SessionButton name={"Follow"}/>;
    }

    return (
      <div className="follow-button medium-color">
        {followButton}
      </div>
    );
  }
});

module.exports = FollowButton;
