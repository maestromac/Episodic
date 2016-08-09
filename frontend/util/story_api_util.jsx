module.exports = {
  fetchAllStories (successCb, errorCb) {
    $.ajax({
      url: 'api/stories',
      method: 'GET',
      success: (resp) => {
        successCb(resp);
      },
      error: (resp) => {
        errorCb(resp);
      }
    });
  },

  fetchAllStoriesByParticularAuthor (id, successCb, errorCb) {
    $.ajax({
      url: `/api/users/${id}/stories`,
      method: 'GET',
      success: (resp) => {
        successCb(resp);
      },
      error: (resp) => {
        errorCb(resp);
      }
    });
  },

  fetchSingleStory (id, successCb, errorCb) {
    $.ajax({
      url: 'api/stories/' + id,
      method: 'GET',
      success: (resp) => {
        successCb(resp);
      },
      error: (resp) => {
        errorCb(resp);
      }
    });
  },

  createStory (story, successCb, errorCb) {
    $.ajax({
      url: 'api/stories',
      method: 'POST',
      data: { story: story },
      success: (resp) => {
        successCb(resp);
      },
      error: (resp) => {
        errorCb(resp);
      }
    });
  },

  editStory (story, successCb, errorCb) {
    $.ajax({
      url: 'api/stories/' + story.id,
      method: 'PATCH',
      data: { story: { title: story.title, body: story.body }},
      success: (resp) => {
        successCb(resp);
      },
      error: (resp) => {
        errorCb(resp);
      }
    });
  },

  destroyStory (id, successCb, errorCb) {
    $.ajax({
      url: 'api/stories/' + id,
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
