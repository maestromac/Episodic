class Api::StoriesController < ApplicationController
  before_action :require_log_in, only: [:create, :update, :destroy]
  before_action :must_be_author, only: [:update, :destroy]

  def create
    @story = Story.new(story_params)

    if @story.save
      render :show
    else
      render json: @story.errors.full_messages
    end
  end

  def followed
    feed_authors = User.find(params[:user_id]).followees.map { |u| u.id }
    @stories = Story.where(author_id: feed_authors)
  end

  def liked
    @stories = User.find(params[:user_id]).liked_stories
  end

  def index
    if params[:user_id]
      @stories = Story.where(author_id: params[:user_id])
    else
      @stories = Story.all
    end

    render :index
  end
  def show
    @story = Story.find(params[:id])
    render :show
  end

  def update
    @story = Story.find(params[:id])
    if @story.update(story_params)
      render :show
    else
      render JSON: @story.errors.full_messages
    end
  end

  def destroy ###
    @story = Story.find(params[:id])

    if @story.destroy
      render json: @story
    else
      render json: ["How could this ever go wrong"], status: 404
    end
  end

  private
  def story_params
    params.require(:story).permit(:author_id, :title, :body)
  end

  def must_be_author
    @story = Story.find(params[:id])
    if @story.author_id != current_user.id
      render json: ["STOP TRYING TO HACK MY SITE, I'M TRYING TO GET A JOB HERE"], status: 401
    end
  end
end
