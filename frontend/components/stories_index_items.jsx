import { Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import Avatar from 'react-avatar';


const React = require('react'),
      ReactDom = require('react-dom'),
      StoryActions = require('../actions/story_actions'),
      StoryStore = require('../stores/story_store');

const StoriesIndexItem = React.createClass({
  render () {
    let story = this.props.story;
    let date = new Date(story.created_at).toDateString();
    date = date.split(" ").splice(1, 2).join(" ");
    return (
      <div className="stories-index">
        <div className="stories-index-content">

          <div className="stories-index-author">
            <Avatar
              size={33}
              round={true}
              src={story.avatar} />
              <ul>
                <li className="medium-color">{story.author}</li>
                <li className="publish-date">
                  {date} • {story.readTime} min read  
                </li>
              </ul>
          </div>

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
