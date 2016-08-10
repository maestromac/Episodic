class Api::FollowsController < ApplicationController
  before_action :require_log_in

  def create
    @follow = Follow.new(followee_id: params[:user_id], follower_id: current_user.id)
    if @follow.save
      render json: @follow
    else
      render json: ["wait how could this ever go wrong"], status: 404
    end
  end

  def destroy
    @follow = Follow.find_by(followee_id: params[:user_id], follower_id: current_user.id)
    if @follow
      @follow.destroy!
      render json: @follow
    else
      render json: ["wait how could this ever go wrong"], status: 404
    end
  end


end
