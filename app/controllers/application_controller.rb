class ApplicationController < ActionController::Base
  helper_method :current_cart

  private

  def current_cart
    # Find the cart by the stored session ID or create a new one if none exists
    Cart.find(session[:cart_id])
  rescue ActiveRecord::RecordNotFound
    cart = Cart.create
    session[:cart_id] = cart.id
    cart
  end

  def cart_count
    current_cart.cart_items.sum(&:quantity)
  end
end
