module.exports = {
  toggleLike (id, successCb, errorCb) {
    $.ajax({
      url: `api/stories/${id}/like`,
      method: 'POST',
      success: (resp) => {
        successCb(resp.followee_id);
      },
      error: (resp) => {
        errorCb(resp);
      }
    });
  },
  untoggleLike (id, successCb, errorCb) {
    $.ajax({
      url: `api/stories/${id}/like`,
      method: 'DELETE',
      success: (resp) => {
        successCb(resp.followee_id);
      },
      error: (resp) => {
        errorCb(resp);
      }
    });
  },
};
