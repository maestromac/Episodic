const Store = require('flux/utils').Store,
      UserConstants = require('../constants/user_constants'),
      AppDispatcher = require('../dispatcher/dispatcher');

let _user = {};

const UserStore = new Store(AppDispatcher);

UserStore.user = () => {
  let temp = _user;
  return Object.assign({}, _user);
};

let receiveUser = (user) => {
  _user = user;
  UserStore.__emitChange();
};

UserStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case UserConstants.USER_RECEIVED:
      receiveUser(payload.user);
      break;
  }
};

module.exports = UserStore;
