const React = require('react'),
      ReactDom = require('react-dom'),
      StoryActions = require('../actions/story_actions'),
      StoryStore = require('../stores/story_store'),
      hashHistory = require('react-router').hashHistory;

encodeURIComponent("\n");
const StoriesIndexItem = React.createClass({
  render () {
    return (
      <div>
        <h1>{this.props.story.title}</h1>
        <h1>by: {this.props.story.author}</h1>
        <br />
        <p className='withprewrap'>
          {this.props.story.body}
        </p>
        <br />
        <br />
      </div>
    );
  }
});

module.exports = StoriesIndexItem;
