class Story < ActiveRecord::Base
  validates :author_id, :body, :title, presence: true

  belongs_to :user, foreign_key: :author_id
end
