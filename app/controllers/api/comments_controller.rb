class Api::CommentsController < ApplicationController
  before_action :require_log_in, only: [:create, :update, :destroy]
  before_action :must_be_commenter, only: [:update, :destroy]

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages
    end

  end

  def index
    if params[:story_id]
      @comments = Comment.where(story_id: params[:story_id])
    elsif params[:user_id]
      @comments = Comment.where(commenter_id: params[:user_id])
    end
    render :index
  end

  def update
  end

  def destroy
  end

  private
  def comment_params
    params.require(:comment).permit(:commenter_id, :story_id, :body)
  end

  def must_be_commenter

  end

end
