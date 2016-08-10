const AppDispatcher = require('../dispatcher/dispatcher'),
      FollowApiUtil = require('../util/follow_api_util'),
      UserActions = require('./follow_actions');


const FollowActions = {
  toggleFollow (id) {
    FollowApiUtil.toggleFollow(id, UserActions.fetchUser(id));
  },

  toggleUnfollow (id) {
    FollowApiUtil.toggleUnfollow(id, UserActions.fetchUser(id));
  },

};

module.exports = FollowActions;
