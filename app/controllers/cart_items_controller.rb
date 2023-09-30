class CartItemsController < ApplicationController

  def update
    @cart = current_cart
    @cart_item = @cart.cart_items.find(params[:id])
    @cart_item.update(quantity: params[:cart_item][:quantity])
    if @cart_item.quantity == 0
      @cart_item.destroy
    end
    @cart_count = cart_count

    respond_to do |format|
      format.js
      format.html { redirect_to my_cart_path, layout: false }
    end
  end
end
