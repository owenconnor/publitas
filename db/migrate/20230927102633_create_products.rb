class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :title
      t.decimal :price
      t.text :description
      t.string :sku
      t.string :image

      t.timestamps
    end
  end
end
