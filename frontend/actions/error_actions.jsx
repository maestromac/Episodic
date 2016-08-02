const SessionApiUtil = require('../util/session_api_util'),
      AppDispatcher = require('../dispatcher/dispatcher'),
      ErrorConstants = require('../constants/error_constants');

module.exports = {
  setErrors (form, errors) {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.SET_ERRORS,
      form: form,
      errors: errors.responseJSON
    });
  },
  clearErrors () {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS
    });
  },
};
