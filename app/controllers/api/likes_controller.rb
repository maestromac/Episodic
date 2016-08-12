class Api::LikesController < ApplicationController
  before_action :require_log_in

  def create
    @like = Like.new(story_id: params[:story_id], user_id: current_user.id)
    if @like.save
      render json: @like
    else
      render json: ["wait how could this ever go wrong"], status: 404
    end
  end

  def destroy
    @like = Like.find_by(story_id: params[:story_id], user_id: current_user.id)
    if @like
      @like.destroy!
      render json: @like
    else
      render json: ["wait how could this ever go wrong"], status: 404
    end
  end


end
