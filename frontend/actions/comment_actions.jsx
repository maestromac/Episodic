const AppDispatcher = require('../dispatcher/dispatcher'),
      CommentConstants = require('../constants/comment_constants'),
      CommentApiUtil = require('../util/comment_api_util');

const CommentActions = {
  fetchAllStoryComments (storyId) {
    CommentApiUtil.fetchAllStoryComments(storyId, this.receiveAllComments);
  },

  fetchAllUserComments (userId) {
    CommentApiUtil.fetchAllUserComments(userId, this.receiveAllComments);
  },

  fetchSingleComment (id) {
    CommentApiUtil.fetchSingleComment(id, this.receiveSingleComment);
  },

  createComment (comment) {
    CommentApiUtil.createComment(comment, this.receiveSingleComment);
  },

  editComment (comment) {
    CommentApiUtil.editComment(comment, this.receiveSingleComment);
  },

  destroyComment (id) {
    CommentApiUtil.destroyComment(id, this.receiveAllComments);
  },

  receiveAllComments (comments) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENTS_RECEIVED,
      comments: comments
    });
  },

  receiveSingleComment (comment) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_RECEIVED,
      comment: comment
    });
  },

  deleteComment (id) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_REMOVED,
      id: id
    });
  },

};

module.exports = CommentActions;
