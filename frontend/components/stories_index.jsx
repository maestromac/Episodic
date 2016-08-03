const React = require('react'),
      ReactDom = require('react-dom'),
      SessionActions = require('../actions/session_actions'),
      SessionStore = require('../stores/session_store'),
      hashHistory = require('react-router').hashHistory,
      ErrorActions = require('../actions/error_actions'),
      ErrorStore = require('../stores/error_store');


const StoriesIndex = React.createClass({
  render () {
    return (
      <div>
        <h3>Stories</h3>
      </div>
    );
  }
});


module.exports = StoriesIndex;
