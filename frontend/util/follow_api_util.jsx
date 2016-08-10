module.exports = {
  toggleFollow (id, successCb, errorCb) {
    $.ajax({
      url: `api/users/${id}/follow`,
      method: 'POST',
      success: (resp) => {
        successCb(resp.followee_id);
      },
      error: (resp) => {
        errorCb(resp);
      }
    });
  },
  toggleUnfollow (id, successCb, errorCb) {
    $.ajax({
      url: `api/users/${id}/follow`,
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
