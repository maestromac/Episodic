Rails.application.routes.draw do
  root to:"static_pages#root"
  namespace :api, defaults: { format: :json } do

    resources :users, only: [:create, :show, :update] do
      resources :stories, only: [:index, :update, :destroy] do
        collection do
          get :followed
        end
        collection do
          get :liked
        end
      end
      resources :comments, only: [:index, :update, :destroy]
      resource :follow, only: [:create, :destroy]
      member do
        get :followers
        get :following
      end
    end

    resources :stories, only: [:create, :destroy, :index, :show, :update] do
      resources :comments, only: [:index]
      resource :like, only: [:create, :destroy]
      collection do
        get :picks
        get :popular
      end
    end

    resource :session, only: [:create, :destroy]

    resource :comments, only: [:create]
  end
end
