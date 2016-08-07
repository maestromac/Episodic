const React = require('react'),
      SessionStore = require('../stores/session_store'),
      StoryActions = require('../actions/story_actions'),
      MediumEditor = require('medium-editor');

const StoryForm = React.createClass({
  getInitialState () {
    return {
      author_id: SessionStore.currentUser().id,
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
    // var editor = new MediumEditor('.editable');
    return (
      <div className="center">
        <div className="form-story">

          <form onSubmit={this.handleSubmit}>
            <input
              className="form-story-title"
              type="text"
              value={this.state.title}
              onChange={this.handleTitleChange}
              placeholder="Title"
              />
            <br />
            <textarea
              className="form-story-body"
              value={this.state.body}
              onChange={this.handleBodyChange}
              placeholder="Tell a story..."
              />
            <br />
            <button>Publish</button>
          </form>

        </div>
      </div>
    );
  }
});

module.exports = StoryForm;
