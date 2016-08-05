const React = require('react'),
      SessionStore = require('../stores/session_store'),
      StoryActions = require('../actions/story_actions');

const StoryEdit = React.createClass({
  getInitialState () {
    // will this be a problem?
    return {
      authorId: SessionStore.currentUser().id,
      title: "",
      body: ""
    };
  },

  handleSubmit () {
    StoryActions.createStory(this.state);
  },
  handleTitleChange (e) {
    e.preventDefault();
    this.setState({ title: e.target.value});
  },
  handleBodyChange (e) {
    e.preventDefault();
    this.setState({ body: e.target.value});
  },

  render () {
    return (
      <div className="story-form">
        <form onSumit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange}
            placeholder="Title"
            />
          <br />
          <textarea
            value={this.state.body}
            onChange={this.handleBodyChange}
            placeholder="Tell a story..."
            />
          // how do i put this submit button
        </form>
      </div>
    );
  }
});

module.exports = StoryEdit;
