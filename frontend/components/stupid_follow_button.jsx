const React = require('react'),
      SessionStore = require('../stores/session_store'),
      SessionButton = require('./session_button'),
      FollowActions = require('../actions/follow_actions'),
      UserActions = require('../actions/user_actions');

const StupidFollowButton = React.createClass({
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

  renderFollowRelationButton() {
    if (this.state.following) {
      return (
        <button
          className="following-button"
          onClick={this.handleUnfollow}>
            Following
        </button>
      );
    } else {
      return (
        <button
          className="follow-button"
          onClick={this.handleFollow}>
            Follow
        </button>
      );
    }
  },

  renderFollowButton () {
    if (SessionStore.isUserLoggedIn()) {
      return this.renderFollowRelationButton();
    } else {
      return (
        <div className="follow-button-special">
          <SessionButton name={"Follow"} />
        </div>
      );
    }
  },

  render () {
    return (
      <div className="user-view-following-status">
        {this.renderFollowButton()}
      </div>
    );
  }
});

module.exports = StupidFollowButton;
