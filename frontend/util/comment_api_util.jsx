module.exports = {
  fetchAllStoryComments (storyId, successCb, errorCb) {
    $.ajax({
      url: `api/stories/${storyId}/comments`,
      method: 'GET',
      success: (resp) => {
        successCb(resp);
      },
      error: (resp) => {
        errorCb(resp);
      }
    });
  },

  fetchSingleComment (id, successCb, errorCb) {
    $.ajax({
      url: 'api/comments/' + id,
      method: 'GET',
      success: (resp) => {
        successCb(resp);
      },
      error: (resp) => {
        errorCb(resp);
      }
    });
  },

  createComment (comment, successCb, errorCb) {
    $.ajax({
      url: 'api/comments',
      method: 'POST',
      data: { comment: comment },
      success: (resp) => {
        successCb(resp);
      },
      error: (resp) => {
        errorCb(resp);
      }
    });
  },

  editComment (comment, successCb, errorCb) {
    $.ajax({
      url: 'api/comments',
      method: 'PATCH',
      data: { comment: comment },
      success: (resp) => {
        successCb(resp);
      },
      error: (resp) => {
        errorCb(resp);
      }
    });
  },

  destroyComment (id, successCb, errorCb) {
    $.ajax({
      url: 'api/comments/' + id,
      method: 'DELETE',
      success: (resp) => {
        successCb(resp);
      },
      error: (resp) => {
        errorCb(resp);
      }
    });
  },

};
