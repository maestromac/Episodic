const React = require('react'),
      ReactDom = require('react-dom'),
      StoryActions = require('../actions/story_actions'),
      StoryStore = require('../stores/story_store'),
      StoriesIndex = require('./stories_index'),
      hashHistory = require('react-router').hashHistory,
      Sidebar = require('./sidebar');

const MainIndex = React.createClass({
  renderSidebar () {
    let tests = ["/", "/feed", "/popular", "/picks"];
    if (tests.includes(this.props.location.pathname)) {
      return <Sidebar/>;
    }
  },

  render () {
    return (
      <div className="main-plate">
       <div className='main-center flex'>
          <StoriesIndex
            authorId={this.props.authorId}
            path={this.props.location.pathname} />
            {this.renderSidebar()}
        </div>
      </div>
    );
  }
});

module.exports = MainIndex;
