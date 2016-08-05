class Story < ActiveRecord::Base
  validates :author_id, :body, :title, presence: true

  belongs_to :author, class_name: "User", foreign_key: :author_id
end
