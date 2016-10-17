import { Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import Avatar from 'react-avatar';


const React = require('react'),
      ReactDom = require('react-dom'),
      StoryActions = require('../actions/story_actions'),
      StoryStore = require('../stores/story_store'),
      SessionStore = require('../stores/session_store');

const SidebarItem = React.createClass({
  render () {
    let story = this.props.story;
    return (
      <div className="sidebar-item-list">
        <Link to={`/user/${story.author_id}`}>
          <Avatar
            size={33}
            round={true}
            src={story.avatar} />
        </Link>
        <ul>
          <Link to={`/stories/${story.id}`}>
            <li><h2>{story.title}</h2></li>
          </Link>

          <Link to={`/user/${story.author_id}`}>
            <li><h1>{story.author}</h1></li>
          </Link>
        </ul>
      </div>
    );
  }
});

module.exports = SidebarItem;
