class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :body
      t.string :author
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
