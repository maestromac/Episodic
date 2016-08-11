const AppDispatcher = require('../dispatcher/dispatcher'),
      StoryConstants = require('../constants/story_constants'),
      StoryApiUtil = require('../util/story_api_util');

const StoryActions = {
  fetchAllStories () {
    StoryApiUtil.fetchAllStories(this.receiveAllStories);
  },

  fetchAllStoriesByParticularAuthor (id) {
    StoryApiUtil.fetchAllStoriesByParticularAuthor(id, this.receiveAllStories);
  },

  fetchFeedStories (id) {
    StoryApiUtil.fetchFeedStories(id, this.receiveAllStories);
  },

  fetchSingleStory (id) {
    StoryApiUtil.fetchSingleStory(id, this.receiveSingleStory);
  },

  createStory (story) {
    StoryApiUtil.createStory(story, this.receiveSingleStory);
  },

  editStory (story) {
    StoryApiUtil.editStory(story, this.receiveSingleStory);
  },

  destroyStory (id) {
    StoryApiUtil.destroyStory(id, this.deleteStory);
  },

  receiveAllStories (stories) {
    AppDispatcher.dispatch({
      actionType: StoryConstants.STORIES_RECEIVED,
      stories: stories
    });
  },

  receiveSingleStory (story) {
    AppDispatcher.dispatch({
      actionType: StoryConstants.STORY_RECEIVED,
      story: story
    });
  },

  deleteStory (id) {
    AppDispatcher.dispatch({
      actionType: StoryConstants.STORY_REMOVED,
      id: id
    });
  },

};


module.exports = StoryActions;
