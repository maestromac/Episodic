class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :story_id, null: false

      t.timestamps null: false
    end
    add_index :likes, :user_id
    add_index :likes, :story_id
    add_index :likes, [:user_id, :story_id], unique: true
  end
end
