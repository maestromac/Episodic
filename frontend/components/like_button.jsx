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

  render () {

    let likeButton;
    if (SessionStore.isUserLoggedIn()) {
      if (this.state.liked) {
        likeButton = (
          <div className="user-view-liked-status">
            <button
              className="heart-filled"
              onClick={this.handleUnlike}>
            </button> {this.state.count}
          </div>
        );
      } else {
        likeButton = (
          <div className="user-view-liked-status">
            <button
              className="heart"
              onClick={this.handleLike}>
            </button> {this.state.count}
          </div>
        );
      }
    } else {
      likeButton = (
        <div>
          <SessionButton name={this.state.count} klass={"heart"} />
        </div>
      );
    }

    return (
      <div>
        {likeButton}
      </div>
    );
  }
});

module.exports = LikeButton;
