Rails.application.routes.draw do
  root to:"static_pages#root"
  namespace :api, defaults: { format: :json } do

    resources :users, only: [:create, :show, :update] do
      resources :stories, only: [:index, :update, :destroy]
      resources :comments, only: [:index, :update, :destroy]
      resource :follow, only: [:create, :destroy]
    end

    resources :stories, only: [:create, :destroy, :index, :show, :update] do
      resources :comments, only: [:index]
    end

    resource :session, only: [:create, :destroy]

    resource :comments, only: [:create]
  end
end
