Rails.application.routes.draw do


  
  namespace :api, defaults: {format: :json} do 
    resources :guests do 
      resources :gifts, only: [:index]
    end
    resources :guests, only: [:show,:index]
  end
  # Your routes here!

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
