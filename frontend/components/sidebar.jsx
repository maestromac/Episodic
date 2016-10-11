import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const React = require('react'),
      ReactDom = require('react-dom'),
      Modal = require('react-modal'),
      SessionActions = require('../actions/session_actions'),
      SessionStore = require('../stores/session_store'),
      ErrorActions = require('../actions/error_actions'),
      ErrorStore = require('../stores/error_store');

const Sidebar = React.createClass ({
  // getInitialState () {
  //
  // },

  render () {
    return (
      <div>
        <ul className="testing">
          <li>This story is popping</li>
          <li>So is this one</li>
          <li>and this one too</li>
        </ul>
      </div>
    );
  }
});


module.exports = Sidebar;
