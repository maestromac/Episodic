import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const React = require('react'),
      ReactDom = require('react-dom'),
      Modal = require('react-modal'),
      SessionActions = require('../actions/session_actions'),
      SessionStore = require('../stores/session_store'),
      ErrorActions = require('../actions/error_actions'),
      ErrorStore = require('../stores/error_store'),
      StoryStore = require('../stores/story_store'),
      SidebarItem = require('./sidebar_item');

const Sidebar = React.createClass ({
  getInitialState () {
    return { stories: [] };
  },

  componentDidMount () {
    this.listener = StoryStore.addListener(this._onChange);
  },

  componentWillUnmount () {
    this.listener.remove();
  },

  _onChange () {
    this.setState({ stories: StoryStore.all() });
  },

  renderSidebar () {
    let sidebar;
    let stories;
    if (this.state.stories) {
      stories = this.state.stories.sort( () => {
        return .5 - Math.random();
      }).splice(0, 7);

      sidebar = (
        <div className="sidebar-item">

          <div className="sidebar-item-title">
            <h1>Reading Roulette</h1>
            <h2>Take a look at these great stories</h2>
          </div>
          <ul>
            {stories.map( (story, idx) => {
              return  <SidebarItem story={story} key={idx}/>;
            })}
          </ul>
        </div>
      );
    }
    return sidebar;
  },

  render () {
    return (
      <div>
        {this.renderSidebar()}
      </div>
    );
  }
});


module.exports = Sidebar;
