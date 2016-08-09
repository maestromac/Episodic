const React = require('react'),
      ReactDom = require('react-dom'),
      StoryActions = require('../actions/story_actions'),
      StoryStore = require('../stores/story_store'),
      StoriesIndexItem = require('./stories_index_item'),
      hashHistory = require('react-router').hashHistory;

const StoriesIndex = React.createClass({
  getInitialState () {
    return { stories: [] };
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
    let stories = this.state.stories;

    stories.sort( (a, b) => {
      if ( a.created_at > b.created_at ) {
        return -1;
      } else if ( a.created_at < b.created_at ) {
        return 1;
      } else {
        return 0;
      }
    });

    return (
      <ul className='center'>
        {
          stories.map( (story) => {
            return <StoriesIndexItem story={story} key={story.id}/>;
          })
        }
      </ul>
    );
  }
});


module.exports = StoriesIndex;
