const React = require('react'),
      ReactDom = require('react-dom'),
      StoryActions = require('../actions/story_actions'),
      StoryStore = require('../stores/story_store'),
      StoriesIndexItem = require('./stories_index_items'),
      hashHistory = require('react-router').hashHistory;


const StoriesIndex = React.createClass({
  getInitialState () {
    return { stories: {} };
  },

  componentDidMount () {
    StoryActions.fetchAllStories();
    StoryStore.addListener(this._onChange);
  },

  _onChange () {
    this.setState({ stories: StoryStore.all() });
  },

  render () {
    let storiesArr = [];
    for (var id in this.state.stories) {
      storiesArr.push(this.state.stories[id]);
    }

    return (
      <ul className='stories-index'>
        {
          storiesArr.map( (story) => {
            return <StoriesIndexItem story={story} key= {story.id}/>;
          })
        }
      </ul>
    );
  }
});


module.exports = StoriesIndex;
