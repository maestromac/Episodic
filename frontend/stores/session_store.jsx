const Store = require('flux/utils').Store,
      SessionConstants = require('../constants/session_constants'),
      AppDispatcher = require('../dispatcher/dispatcher');


const SessionStore = new Store(AppDispatcher);

let _currentUser = {};

let _login = (user) => {
  _currentUser = {};
  _currentUser = user;
  SessionStore.__emitChange();
};
let _logout = () => {
  _currentUser = {};
  SessionStore.__emitChange();
};

SessionStore.currentUser = () => {
    return _currentUser.username;
};

SessionStore.isUserLoggedIn = () => {
  if (_currentUser.id) {
    return true;
  } else {
    return false;
  }
};

SessionStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.user);
      break;
    case SessionConstants.LOGOUT:
      _logout();
      break;
  }
};

module.exports = SessionStore;
