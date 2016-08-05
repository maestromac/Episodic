class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :require_log_in, :logged_in?, :current_user

  def current_user
    user = User.find_by(session_token: session[:session_token])
    return user if user
    nil
  end

  def logged_in?
    current_user != nil
  end

  def log_in(user)
    session[:session_token] = user.reset_session_token!
  end

  def log_out
    if current_user
      current_user.reset_session_token!
      session[:session_token] = nil
      true
    else
      false
    end
  end

  def require_log_in
    render json: ["Log in required"], status: 401 unless logged_in?
    # what about this?
    # render json: {base: ['invalid credentials']}, status: 401 if !current_user
  end

end
