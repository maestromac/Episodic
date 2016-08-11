class Story < ActiveRecord::Base
  validates :author_id, :body, :title, presence: true

  belongs_to :author, class_name: "User", foreign_key: :author_id
  has_many :comments, class_name: "Comment", foreign_key: :story_id, dependent: :destroy

  def read_time
    self.body.split.length/275
  end

  def comments_count
    self.comments.count
  end

  # doesn't work for some reason
  def truncate_body
    Nokogiri::HTML(self.body).text.truncate(284, separator: ' ', :escape => false)
  end
end
