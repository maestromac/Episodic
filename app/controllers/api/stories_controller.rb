class Api::StoriesController < ApplicationController

  def create

  end

  def destroy

  end

  def index

  end

  def show

  end

  def update

  end

  private
  def story_params
    params.require(:story).permit(:author_id, :title, :body)
  end
end
