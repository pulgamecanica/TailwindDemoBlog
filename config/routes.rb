Rails.application.routes.draw do
  root "authors#control_panel"

  namespace :authors do
    resources :posts
  end  
  get 'authors/control_panel'
  get 'authors/profile'
  get 'authors/settings'
  
  devise_for :authors
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
end
