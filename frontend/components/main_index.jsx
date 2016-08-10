const React = require('react'),
      ReactDom = require('react-dom'),
      StoryActions = require('../actions/story_actions'),
      StoryStore = require('../stores/story_store'),
      StoriesIndex = require('./stories_index'),
      hashHistory = require('react-router').hashHistory;



const MainIndex = React.createClass({
  render () {
    return (
      <div className="main-plate">
        <StoriesIndex
          authorId={this.props.authorId}
          path={this.props.location.pathname} />
      </div>
    );
  }
});

module.exports = MainIndex;
