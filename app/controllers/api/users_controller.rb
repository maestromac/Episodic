class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render json: @user
    else
      render json: ["Could not locate user"], status: 404
    end
  end


  private
  def user_params
    params.require(:user).permit(
      :username, :password, :pen_name, :description
    )
  end
end
