class Story < ActiveRecord::Base
  validates :author_id, :body, :title, presence: true

  belongs_to :author, class_name: "User", foreign_key: :author_id
  has_many :comments, class_name: "Comment", foreign_key: :story_id

  def read_time
    self.body.split.length/275
  end
end
