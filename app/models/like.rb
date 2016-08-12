class Like < ActiveRecord::Base
  validates :user_id, :story_id, presence: true
  validates :story_id, uniqueness: { scope: :user_id }

  belongs_to :user
  belongs_to :story
end
