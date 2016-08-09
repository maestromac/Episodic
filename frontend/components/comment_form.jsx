import Avatar from 'react-avatar';

const React = require('react'),
      SessionStore = require('../stores/session_store'),
      CommentActions = require('../actions/comment_actions');

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
    return (
      <div className="center">
        <div className="comments-plate-form">
          <div className="comments-plate-form-content">

            <div className="comments-plate-form-author">
              <ul>
                <li>
                  <Avatar
                    key={SessionStore.currentUser().id}
                    size={33}
                    round={true}
                    src={SessionStore.currentUser().avatar}
                  />
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
                placeholder="leave a comment.."
              />
              <br/>
              <button className="medium-color">Publish</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = CommentForm;
