class CustomPagesController < ApplicationController

  def publitas_embed
    @cart_count = cart_count
    render "publitas_embed"
  end
end
