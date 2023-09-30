class CartsController < ApplicationController
  def show
    @cart = current_cart
  end

  def my_cart
    @cart = current_cart
    render "show"
  end

  def popover_cart
    @cart = current_cart
    render "popover_cart", layout: false
  end

  def update_quantity
    @cart = current_cart
    @cart_item = @cart.cart_items.find(params[:id])
    redirect_to my_cart_path
  end


end
