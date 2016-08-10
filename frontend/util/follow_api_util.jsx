module.exports = {
  toggleFollow (id, successCb, errorCb) {
    $.ajax({
      url: `api/users/${id}/follows`,
      method: 'POST',
      success: (resp) => {
        successCb(resp);
      },
      error: (resp) => {
        debugger
        errorCb(resp);
      }
    });
  },
  toggleUnfollow (id, successCb, errorCb) {
    $.ajax({
      url: `api/users/${id}/follows/${id}`,
      method: 'DELETE',
      success: (resp) => {
        successCb(resp);
      },
      error: (resp) => {
        debugger
        errorCb(resp);
      }
    });
  },
};
