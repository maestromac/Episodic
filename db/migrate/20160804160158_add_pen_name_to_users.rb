class AddPenNameToUsers < ActiveRecord::Migration
  def change
    add_column :users, :pen_name, :string
    User.all.each do |user|
      user.update!(pen_name: user.username)
    end
    change_column_null :users, :pen_name, false
  end
end
