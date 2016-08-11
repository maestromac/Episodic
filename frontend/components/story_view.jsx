const React = require('react'),
      ReactDOM = require('react-dom'),
      StoryActions = require('../actions/story_actions'),
      StoryStore = require('../stores/story_store'),
      StoriesIndexItem = require('./stories_index_item'),
      CommentsIndex = require('./comments_index'),
      CommentForm = require('./comment_form');

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

  createMarkup () {
    return {__html: this.state.story.body };
  },

  // {
  //   story.body.split("\n").map( (paragraph, idx) => {
  //     return (
  //       <div key={`${idx}`}>
  //         <p>{paragraph}</p>
  //         <br />
  //       </div>
  //     );
  //   })
  // }
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
          <div dangerouslySetInnerHTML={this.createMarkup()} />
        </div>
      );
    }
    return (
      <div>
        <div className="story-plate">
          {content}
        </div>

        <div className="divider-plate">
          <div className="center">
            <div className="divider-plate-content">
              <h1>Comments</h1>
            </div>
          </div>
        </div>

        <div className="comments-plate">
          <CommentForm storyId={this.id}/>
          <br/>
          <CommentsIndex storyId={this.id} />
        </div>
      </div>
    );
  }



});


module.exports = StoryView;
