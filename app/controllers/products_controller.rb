class ProductsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:add_to_cart]
  def index
    @products = Product.all
  end

  def show
    @product = Product.find(params[:id])
  end

  def catalogue_popover
    @product = Product.find(params[:id])
    @product_count = current_cart.cart_items.where(product_id: @product.id).sum(:quantity)
    render layout: false
  end


  def new
    @product = Product.new
  end

  def edit
    @product = Product.find(params[:id])
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      redirect_to @product, notice: 'Product was successfully created.'
    else
      render :new  # Ensure you're rendering the 'new' view on failure
    end
  end

  def update
    @product = Product.find(params[:id])
    if @product.update(product_params)
      redirect_to @product, notice: 'Product was successfully updated.'
    else
      render :edit  # Ensure you're rendering the 'edit' view on failure
    end
  end

  def add_to_cart
    Rails.logger.info "============ request_format: #{request.format} ================="
    cart = current_cart
    product = Product.find(params[:id])
    cart_item = cart.cart_items.find_or_initialize_by(product: product)
    cart_item.quantity ||= 0
    cart_item.quantity += 1
    cart_item.save

    @product_count = current_cart.cart_items.where(product_id: product.id).sum(:quantity)
    @cart_count = cart_count

    respond_to do |format|
      format.js
      format.html { redirect_to cart_path(current_cart) }
    end
  end

  def remove_from_cart
    cart = current_cart
    product = Product.find(params[:id])
    cart_item = cart.cart_items.find_by(product: product)
    cart_item.destroy if cart_item.present?
    respond_to do |format|
      format.js
      format.html { redirect_to cart_path(current_cart) }
    end
  end


  private
  def product_params
    params.require(:product).permit(:title, :description, :price, :image)
  end
end
