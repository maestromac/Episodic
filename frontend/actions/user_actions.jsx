const AppDispatcher = require('../dispatcher/dispatcher'),
      UserConstants = require('../constants/user_constants'),
      FollowApiUtil = require('../util/follow_api_util'),
      UserApiUtil = require('../util/user_api_util');

const UserActions = {
  fetchUser (id) {
    UserApiUtil.fetchUser(id, this.receiveUser);
  },

  toggleFollow (id) {
    FollowApiUtil.toggleFollow(id, this.fetchUser.bind(this));
  },

  toggleUnfollow (id) {
    FollowApiUtil.toggleUnfollow(id, this.fetchUser.bind(this));
  },

  receiveUser (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },


};

module.exports = UserActions;
