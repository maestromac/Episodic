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
    this.listener = StoryStore.addListener(this._onChange);
    StoryActions.fetchAllStories();
  },

  componentWillUnmount () {
    this.listener.remove();
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
      <ul className='center'>
        {
          storiesArr.map( (story) => {
            return <StoriesIndexItem story={story} key={story.id}/>;
          })
        }
      </ul>
    );
  }
});


module.exports = StoriesIndex;
