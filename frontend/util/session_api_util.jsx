module.exports = {
  signUp (user, successCb, errorCb) {
    $.ajax({
      url: 'api/users',
      method: 'POST',
      data: { user: user },
      // data: { user: { username: "admin", password: "password"} },
      success: (resp) => {
        successCb(resp);
      },
      error: (resp) => {
        errorCb('SignupForm', resp);
      },
    });
  },

  logIn (user, successCb, errorCb) {
    $.ajax({
      url: 'api/session',
      method: 'POST',
      data: { user: user },
      // data: { user: { username: "admin", password: "password"} },
      success: (resp) => {
        successCb(resp);
      },
      error: (resp) => {
        errorCb('LoginForm', resp);
      },
    });
  },

  logOut (successCb, errorCb) {
    $.ajax({
      url: 'api/session',
      method: 'DELETE',
      success: (resp) => {
        successCb(resp);
      },
      error: (resp) => {
        errorCb(resp);
      },
    });
  },

};
