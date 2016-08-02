const Store = require('flux/utils').Store,
      ErrorConstants = require('../constants/error_constants'),
      AppDispatcher = require('../dispatcher/dispatcher');


const ErrorStore = new Store(AppDispatcher);

let _errors = [];
let _form;

ErrorStore.errors = (form) => {
  if (form === _form) {
    return _errors.slice();
  }
};

let _setErrors = (form, errors) => {
  _form = form;
  _errors = errors;
  ErrorStore.__emitChange();
};

let _clearErrors = () => {
  _form = "";
  _errors = [];
  ErrorStore.__emitChange();
};

ErrorStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      _setErrors(payload.form, payload.errors);
      break;
    case ErrorConstants.CLEAR_ERRORS:
      _clearErrors();
      break;
  }
};

module.exports = ErrorStore;
