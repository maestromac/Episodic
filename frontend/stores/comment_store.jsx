const Store = require('flux/utils').Store,
      CommentConstants = require('../constants/comment_constants'),
      AppDispatcher = require('../dispatcher/dispatcher');

let _comments = {};

const CommentStore = new Store(AppDispatcher);

CommentStore.all = () => {
  let commentsArr = [];
  for (var id in _comments) {
    if (_comments.hasOwnProperty(id)) {
      commentsArr.push(_comments[id]);
    }
  }
  return commentsArr;
};

CommentStore.find = (id) => {
  return Object.assign({}, _comments[id]);
};

let resetAllComments = (comments) => {
  _comments = comments;
  CommentStore.__emitChange();
};

let resetSingleComment = (comment) => {
  _comments[comment.id] = comment;
  CommentStore.__emitChange();
};

let removeComment = (id) => {
  delete _comments[id];
  CommentStore.__emitChange();
};

CommentStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case CommentConstants.COMMENTS_RECEIVED:
      resetAllComments(payload.comments);
      break;
    case CommentConstants.COMMENT_RECEIVED:
      resetSingleComment(payload.comment);
      break;
    case CommentConstants.COMMENT_REMOVED:
      removeComment(payload.id);
      break;
  }
};

module.exports = CommentStore;
