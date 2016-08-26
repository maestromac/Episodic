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

  fetchEditorStories (successCb, errorCb) {
    $.ajax({
      url: 'api/stories/picks',
      method: 'GET',
      success: (resp) => {
        successCb(resp);
      },
      error: (resp) => {
        debugger
        errorCb(resp);
      }
    });
  },

  fetchPopularStories (successCb, errorCb) {
    $.ajax({
      url: 'api/stories/popular',
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

  fetchAllLikedStories (id, successCb, errorCb) {
    $.ajax({
      url: `/api/users/${id}/stories/liked`,
      method: 'GET',
      success: (resp) => {
        successCb(resp);
      },
      error: (resp) => {
        errorCb(resp);
      }
    });
  },

  fetchFeedStories (id, successCb, errorCb) {
    $.ajax({
      url: `/api/users/${id}/stories/followed`,
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
        successCb(resp.id);
      },
      error: (resp) => {
        errorCb(resp);
      }
    });
  },

};
