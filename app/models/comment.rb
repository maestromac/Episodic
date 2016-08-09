class Comment < ActiveRecord::Base
  validates :commenter_id, :story_id, :body, presence: true

  belongs_to :commenter, class_name: "User", foreign_key: :commenter_id
  belongs_to :story
end
