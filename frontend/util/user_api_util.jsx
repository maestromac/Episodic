module.expors = {
  fetchUser (id, successCb, errorCb) {
    $.ajax({
      url: 'api/users/' + id,
      method: 'GET',
      success: (resp) => {
        successCb(resp);
      },
      error: (resp) => {
        errorCb(resp);
      },
    });
  },

  editUser (user, successCb, errorCb) {
    $.ajax({
      url: 'api/users',
      method: 'PATCH',
      data: { user: {
        username: user.username,
        pen_name: user.penName,
        password: user.password,
        description: user.description
      } },
      success: (resp) => {
        successCb(resp);
      },
      error: (resp) => {
        errorCb('SignupForm', resp);
      },
    });
  },
};
