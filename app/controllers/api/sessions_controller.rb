class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      log_in(@user)
      render :show
    else
      render json: ["Invalid Credentials"], status: 404
    end
  end

  def destroy
    if log_out
      render json: {}
    else
      render json: ["There's no user to log out"], status: 404
    end
  end

end
