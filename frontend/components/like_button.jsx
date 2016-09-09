const React = require('react'),
      SessionStore = require('../stores/session_store'),
      SessionButton = require('./session_button'),
      StoryActions = require('../actions/story_actions');

const LikeButton = React.createClass({
  getInitialState () {
    return { liked: this.props.liked, count: this.props.count  };
  },

  handleLike () {
    StoryActions.toggleLike(this.props.id);
    this.setState({
      liked: true,
      count: this.state.count + 1
    });
  },

  handleUnlike () {
    StoryActions.untoggleLike(this.props.id);
    this.setState({
      liked: false,
      count: this.state.count - 1
    });
  },

  renderLikeButton() {
    if (SessionStore.isUserLoggedIn()) {
      return this.renderLoggedInLikeButton();
    } else {
      return (<SessionButton name={this.state.count} klass={"heart"} />);
    }
  },

  renderLoggedInLikeButton() {
    let likeButton;
    if (this.state.liked) {
      likeButton = (
        <button
          className="heart-filled"
          onClick={this.handleUnlike}>
        </button>
      );
    } else {
      likeButton = (
        <button
          className="heart"
          onClick={this.handleLike}>
        </button>
      );
    }

    return (
      <div className="user-view-liked-status">
        {likeButton} {this.state.count}
      </div>
    );
  },

  render () {

    return (
      <div>
        {this.renderLikeButton()}
      </div>
    );
  }
});

module.exports = LikeButton;
