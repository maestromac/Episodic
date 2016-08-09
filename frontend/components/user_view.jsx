import { Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import Avatar from 'react-avatar';

const React = require('react'),
      SessionStore = require('../stores/session_store'),
      SessionActions = require('../actions/session_actions'),
      UserActions = require('../actions/user_actions'),
      UserStore = require('../stores/user_store');


const UserView = React.createClass({
  getInitialState () {
    this.id = parseInt(this.props.params.id);
    return { user: undefined };
  },

  componentDidMount () {
    this.listener = UserStore.addListener(this._onChange);
    UserActions.fetchUser(this.id);
  },

  componentWillReceiveProps (nextProps) {
    this.id = parseInt(nextProps.routeParams.id);
    UserActions.fetchUser(this.id);
  },

  _onChange () {
    this.setState({ user: UserStore.user() });
  },

  componentWillUnmount () {
    this.listener.remove();
  },


  render () {

    let user = this.state.user;
    let content = (<div><h2>loading</h2></div>);

    if (user) {
      content = (
        <div className="user-view-plate">
          <Avatar
            className="use-view-plate-avatar"
            size={100}
            round={true}
            src={user.avatar} />
          <ul className="user-view">
            <li>{user.pen_name}</li>
            <li>{user.description}</li>
          </ul>
        </div>
      );
    }

    return (
      <div className="center">
        {content}
      </div>
    );
  }
});

module.exports = UserView;
