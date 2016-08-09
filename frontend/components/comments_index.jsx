const React = require('react'),
      CommentStore = require('../stores/comment_store'),
      CommentActions = require('../actions/comment_actions'),
      CommentsIndexItem = require('./comments_index_item');

const CommentsIndex = React.createClass({
  getInitialState () {
    return { comments: [] };
  },

  componentDidMount () {
    this.listener = CommentStore.addListener(this._onChange);
    CommentActions.fetchAllStoryComments(this.props.storyId);
  },

  componentWillUnmount () {
    this.listener.remove();
  },

  _onChange () {
    this.setState({ comments: CommentStore.all() });
  },

  render () {

    let comments = this.state.comments;

    comments.sort( (a, b) => {
      if ( a.created_at > b.created_at ) {
        return -1;
      } else if ( a.created_at < b.created_at ) {
        return 1;
      } else {
        return 0;
      }
    });

    return (
      <ul className= 'center'>
        {
          comments.map( (comment) => {
            return <CommentsIndexItem comment={comment} key={comment.id} />;
          })
        }
      </ul>
    );
  }

});

module.exports = CommentsIndex;
