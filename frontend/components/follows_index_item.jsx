import { Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import Avatar from 'react-avatar';

const React = require('react'),
      StupidFollowButton = require('./stupid_follow_button'),
      SessionStore = require('../stores/session_store');


const FollowsIndexItem = React.createClass({
  render () {
    let temp = this.props.user;
    let user;
    for (var id in this.props.user) {
      user = this.props.user[id];
    }

    return (
      <div className="floating-follow-modal">
        <div className="floating-follow-modal-user">
          <Avatar
            size={33}
            round={true}
            src={user.avatar} />
          <ul>
            <li>{user.pen_name}</li>
            <li>{user.description}</li>
          </ul>
        </div>
        {
          user.id === SessionStore.currentUser().id ? "" :
          <StupidFollowButton isFollowing={user.followed} id={user.id} />
        }
      </div>
    );
  }
});

module.exports = FollowsIndexItem;
