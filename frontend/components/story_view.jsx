const React = require('react'),
      ReactDOM = require('react-dom'),
      StoryActions = require('../actions/story_actions'),
      StoryStore = require('../stores/story_store'),
      StoriesIndexItem = require('./stories_index_items');

const StoryView = React.createClass({
  getInitialState () {
    this.id = parseInt(this.props.params.id);
    return { story: undefined };
  },

  componentDidMount () {
    this.listener = StoryStore.addListener(this._onChange);
    StoryActions.fetchSingleStory(this.id);
  },

  componentWillReceiveProps (nextProps) {
    this.id = parseInt(nextProps.routeParams.id);
    StoryActions.fetchSingleStory(this.id);
  },

  _onChange () {
    this.setState({ story: StoryStore.find(this.id)});
  },

  componentWillUnmount () {
    this.listener.remove();
  },

  render () {
    let content = "";
    let story = this.state.story;
    if (story) {
      content = (
        <div className="center whole-story">
          <h1 className="medium-color">{story.author}</h1>
          <br />
          <h1 className="story-title">{story.title}</h1>
          <br />
          {
            story.body.split("\n").map( (paragraph, idx) => {
              return (
                <div key={`${idx}`}>
                  <p>{paragraph}</p>
                  <br />
                </div>
              );
            })
          }
        </div>
      );
    }
    return (
      <div className="story-plate">
        {content}
      </div>
    );
  }



});


module.exports = StoryView;
