const React = require('react'),
      ReactDom = require('react-dom'),
      StoryActions = require('../actions/story_actions'),
      StoryStore = require('../stores/story_store'),
      StoriesIndexItem = require('./stories_index_item'),
      SessionStore = require('../stores/session_store'),
      hashHistory = require('react-router').hashHistory;

const StoriesIndex = React.createClass({
  getInitialState () {
    return { stories: [] };
  },

  componentDidMount () {
    this.listener = StoryStore.addListener(this._onChange);
    if (this.props.authorId) {
      StoryActions.fetchAllStoriesByParticularAuthor(this.props.authorId);
    } else if (this.props.path === "/feed") {
      StoryActions.fetchFeedStories(SessionStore.currentUser().id);
    } else {
      StoryActions.fetchAllStories();
    }
  },

  componentWillReceiveProps (nextProps) {
    this.id = parseInt(nextProps.authorId);
    // StoryActions.fetchSingleStory(this.id);

    if (nextProps.path.indexOf("likes") !== -1) {
      StoryActions.fetchAllLikedStories(this.id);
    }
    else if (this.id) {
      StoryActions.fetchAllStoriesByParticularAuthor(this.id);
    } else {
      if (nextProps.path === "/feed") {
        StoryActions.fetchFeedStories(SessionStore.currentUser().id);
      } else if (nextProps.path === "/") {
        StoryActions.fetchAllStories();
      }
    }
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
          stories.map( (story, idx) => {
            return <StoriesIndexItem
                      story={story}
                      key={idx}
                      path={this.props.path}/>;
          })
        }
      </ul>
    );
  }
});


module.exports = StoriesIndex;
