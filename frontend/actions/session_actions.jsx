const SessionApiUtil = require('../util/session_api_util'),
      AppDispatcher = require('../dispatcher/dispatcher'),
      SessionConstants = require('../constants/session_constants'),
      ErrorActions = require('./error_actions');

module.exports = {
  signUp (user) {
    SessionApiUtil.signUp(
      user,
      this.receiveCurrentUser,
      ErrorActions.setErrors
    );
  },

  logIn (user) {
    SessionApiUtil.logIn(
      user,
      this.receiveCurrentUser,
      ErrorActions.setErrors
    );
  },

  logOut () {
    SessionApiUtil.logOut(
      this.receiveCurrentUser,
      ErrorActions.setErrors
    );
  },

  receiveCurrentUser (user) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      user: user
    });
  },

};
