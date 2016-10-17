import { Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import Avatar from 'react-avatar';


const React = require('react'),
      ReactDom = require('react-dom'),
      StoryActions = require('../actions/story_actions'),
      StoryStore = require('../stores/story_store'),
      SessionStore = require('../stores/session_store'),
      LikeButton = require('./like_button'),
      DeleteButton = require('./delete_button');



const StoriesIndexItem = React.createClass({
  handleEdit (e) {
    e.preventDefault();
    hashHistory.push(`/stories/${this.props.story.id}/edit`);
  },

  handleDelete (e) {
    e.preventDefault();
    //are you sure you want to delete this
    StoryActions.destroyStory(this.props.story.id);
  },

  render () {
    let story = this.props.story;
    let date = new Date(story.created_at).toDateString();
    let buttons;
    if (SessionStore.currentUser().id === story.author_id &&
        this.props.path.indexOf("/user/") !== -1 ) {
      buttons = (
        <div className="author-edit-delete-buttons">
          <ul>
            <li><button onClick={this.handleEdit}>Edit</button></li>
            <li><DeleteButton id={story.id}/></li>
          </ul>
        </div>
      );
    }

    date = date.split(" ").splice(1, 2).join(" ");

    return (
      <div className="stories-index-item">
        <div className="stories-index-item-content">

          <div className="stories-index-item-author">
            <Link to={`/user/${story.author_id}`}>
              <Avatar
                size={33}
                round={true}
                src={story.avatar} />
            </Link>
              <ul>

                <Link to={`/user/${story.author_id}`}>
                  <li className="medium-color">{story.author}</li>
                </Link>

                <li className="publish-date">
                  {date} • {story.readTime} min read
                </li>

              </ul>
          </div>

          <Link to={`/stories/${story.id}`}
                className="stories-index-item-title">
                {story.title}
          </Link>
          <br />
            {story.body}
          <br />
          <ul className="stories-index-item-info-buttons">
            <li>
            <LikeButton liked={story.liked} count={story.likes} id={story.id}/>
            </li>
            <li>{story.comments} comments {buttons}</li>
          </ul>
          <br />
        </div>
      </div>
    );
  }
});

module.exports = StoriesIndexItem;
