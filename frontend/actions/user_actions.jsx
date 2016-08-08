const AppDispatcher = require('../dispatcher/dispatcher'),
      UserConstants = require('../constants/user_constants'),
      UserApiUtil = require('../util/user_api_util');

const UserActions = {
  fetchUser (id) {
    UserApiUtil.fetchUser(id, this.receiveUser);
  },

  receiveUser (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  }
};

module.exports = UserActions;
