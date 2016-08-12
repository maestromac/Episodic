const React = require('react'),
      ReactDOM = require('react-dom'),
      StoryActions = require('../actions/story_actions'),
      StoryStore = require('../stores/story_store'),
      StoriesIndexItem = require('./stories_index_item'),
      CommentsIndex = require('./comments_index'),
      CommentForm = require('./comment_form'),
      StupidFollowButton = require('./stupid_follow_button'),
      LikeButton =  require('./like_button');
import Avatar from 'react-avatar';
import { Router, Route, IndexRoute, Link, hashHistory} from 'react-router';



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

  //
  //   <Link to={`/user/${story.author_id}`}>
  //     <Avatar
  //       size={33}
  //       round={true}
  //       src={story.avatar} />
  //   </Link>
  //   <h1 className="medium-color">
  //     <Link to={`/user/${story.author_id}`}>
  //       {story.author}
  //     </Link>
  //   </h1>
  render () {
    let story = this.state.story;
    let likes;
    let date;
    if (story) {
      date = new Date(story.created_at).toDateString();
      date = date.split(" ").splice(1, 2).join(" ");
      likes = (
        <ul className="stories-index-item-info-buttons">
          <li>
          <LikeButton liked={story.liked} count={story.likes} id={story.id}/>
          </li>
          <li>{story.comments} comments </li>
        </ul>
      );
    }
    let content = "";
    if (story) {
      content = (
         <div className="center whole-story">
        <div className="stories-index-item-author">
          <Link to={`/user/${story.author_id}`}>
            <Avatar
              size={60}
              round={true}
              src={story.avatar} />
          </Link>
            <ul>

              <Link to={`/user/${story.author_id}`}>
                <li className="medium-color">{story.author} </li>
              </Link>

              <li className="gray">{story.author_des}</li>

              <li className="publish-date">
                {date} • {story.readTime} min read
              </li>

            </ul>
        </div>
          <br />
          <h1 className="story-title">{story.title}</h1>
          <br />
          <div dangerouslySetInnerHTML={this.createMarkup()} />
          <br />
          {likes}
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
              <h1></h1>
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
