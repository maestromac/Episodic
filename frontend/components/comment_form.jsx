import Avatar from 'react-avatar';

const React = require('react'),
      SessionStore = require('../stores/session_store'),
      CommentActions = require('../actions/comment_actions'),
      SessionButton = require('./session_button');

const CommentForm = React.createClass({
  getInitialState () {
    return { body: "" };
  },

  handleSubmit (e) {
    e.preventDefault();
    if (this.state.body.length > 0) {
      CommentActions.createComment({
        commenter_id: SessionStore.currentUser().id,
        story_id: this.props.storyId,
        body: this.state.body
      });
    }
    this.setState({ body: "" });
  },

  handleBodyChange (e) {
    e.preventDefault();
    this.setState({ body: e.target.value });
  },

  render () {
    let placeholderText;
    let avatar;
    let button;
    if (SessionStore.isUserLoggedIn()) {
      avatar = (
        <Avatar
          key={SessionStore.currentUser().id}
          size={33}
          round={true}
          src={SessionStore.currentUser().avatar}
        />
      );
      placeholderText = "Leave a comment...";
      button = (
        <button>Publish</button>
      );
    } else {
      placeholderText = "Please sign-in to leaave a comment...";
      button = <SessionButton name={"Sign In"}/>;
    }
    return (
      <div className="center">
        <div className="comments-plate-form">
          <div className="comments-plate-form-content">

            <div className="comments-plate-form-author">
              <ul>
                <li>
                  {avatar}
                </li>

                <li className="medium-color">
                  {SessionStore.currentUser().pen_name}
                </li>

               </ul>
            </div>

            <form onSubmit={this.handleSubmit}>
              <textarea
                className="comments-plate-form-body"
                value={this.state.body}
                onChange={this.handleBodyChange}
                placeholder={placeholderText}
              />
              <br/>

              <div className="medium-color">
                {button}
              </div>
            </form>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = CommentForm;
