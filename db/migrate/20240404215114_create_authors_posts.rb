class CreateAuthorsPosts < ActiveRecord::Migration[7.1]
  def change
    create_table :authors_posts do |t|
      t.string :title
      t.text :description
      t.datetime :published_at
      t.boolean :published
      t.references :author, null: false, foreign_key: true
      t.string :slug

      t.timestamps
    end
    add_index :authors_posts, :slug, unique: true
  end
end
