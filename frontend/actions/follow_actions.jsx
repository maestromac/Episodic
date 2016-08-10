const AppDispatcher = require('../dispatcher/dispatcher'),
      FollowApiUtil = require('../util/follow_api_util'),
      UserActions = require('./user_actions');


const FollowActions = {
  toggleFollow (id) {
    debugger
    FollowApiUtil.toggleFollow(id, UserActions.fetchUser(id));
  },

  toggleUnfollow (id) {
    debugger
    FollowApiUtil.toggleUnfollow(id, UserActions.fetchUser(id));
  },

};

module.exports = FollowActions;
