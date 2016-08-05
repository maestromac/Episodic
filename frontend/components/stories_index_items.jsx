import { Router, Route, IndexRoute, Link, hashHistory} from 'react-router';

const React = require('react'),
      ReactDom = require('react-dom'),
      StoryActions = require('../actions/story_actions'),
      StoryStore = require('../stores/story_store');

const StoriesIndexItem = React.createClass({
  render () {
    let story = this.props.story;
    return (
      <div className="stories-index">
        <div className="stories-index-content">
          <h1 className="medium-color">{story.author}</h1>
          <Link to={`/stories/${story.id}`}
                className="index-list-title">
                {story.title}
              </Link >
          <br />
          <p className='withprewrap'>
            {story.body}
          </p>
          <br />
          <br />
        </div>
      </div>
    );
  }
});

module.exports = StoriesIndexItem;
