Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "/publitas_embed", to: "custom_pages#publitas_embed", as: "publitas_embed"

  resources :products do
    get :catalogue_popover, on: :member
    member do
      post :add_to_cart
      delete :remove_from_cart
    end
  end

  resources :carts, only: [:show]
  get '/my_cart', to: 'carts#my_cart', as: 'my_cart'
  get '/popover_cart', to: 'carts#popover_cart', as: :popover_cart

  resources :cart_items, only: [:update, :destroy]

  post '/csp-violation-report-endpoint', to: 'csp_reports#create'

  root to: 'custom_pages#publitas_embed'
end

