import { Link, hashHistory} from 'react-router';

const React = require('react'),
      SessionStore = require('../stores/session_store'),
      StoryActions = require('../actions/story_actions'),
      StoryStore = require('../stores/story_store');

import MediumEditorReact from 'react-medium-editor';
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/beagle.css');

const StoryEdit = React.createClass({
  getInitialState () {
    // will this be a problem?
    // this.story = StoryActions.fetchSingleStory(this.props.params.id);
    return {
      id: this.props.params.id,
      title: "",
      body: "",
      updated_at: ""
    };
  },

  componentDidMount () {
    StoryActions.fetchSingleStory(this.props.params.id);
    this.listener = StoryStore.addListener(this._onChange);
  },

  componentWillUnmount () {
    this.listener.remove();
  },

  _onChange () {
    let fetchedStory = StoryStore.find(this.props.params.id);
    let latestStory = StoryStore.latestStory();

    if (this.state.updated_at === "") {
      this.setState({
        title: fetchedStory.title,
        body: fetchedStory.body,
        updated_at: fetchedStory.updated_at
      });
    } else if (this.state.updated_at !==  latestStory.updated_at) {
      hashHistory.push(`/stories/${latestStory.id}`);
    }
  },

  handleSubmit (e) {
    e.preventDefault();
    StoryActions.editStory(this.state);
  },

  handleTitleChange (e) {
    e.preventDefault();
    this.setState({ title: e.target.value});
  },

  // handleBodyChange (e) {
  //   e.preventDefault();
  //   this.setState({ body: e.target.value});
  // },
  handleBodyChange (text, medium) {
    this.setState({ body: text});
  },

  // <textarea
  // className="form-story-body"
  // value={this.state.body}
  // onChange={this.handleBodyChange}
  // placeholder="Tell a story..."
  // />
  render () {
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
              <MediumEditorReact
              text={this.state.body}
              onChange={this.handleBodyChange}
              options={
                {placeholder: { text: '', hideOnClick: true}}
              }
              />
            <br />
            <button className="medium-color">Save Changes</button>
          </form>

        </div>
      </div>
    );
  }
});

module.exports = StoryEdit;
