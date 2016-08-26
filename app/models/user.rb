class User < ActiveRecord::Base
  validates :username, :pen_name, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :description, length: { maximum: 140, allow_nil: true }

  has_attached_file :avatar, default_url: "profile-fallback.png"
  # has_attached_file :avatar, default_url: "/images/profile-fallback.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  has_many :stories, foreign_key: :author_id
  has_many :comments, foreign_key: :commenter_id
  has_many :in_follows, class_name: "Follow", foreign_key: "followee_id"
  has_many :out_follows, class_name: "Follow", foreign_key: "follower_id"
  has_many :followers, through: :in_follows, source: :follower
  has_many :followees, through: :out_follows, source: :followee

  has_many :likes, dependent: :destroy
  has_many :liked_stories, through: :likes, source: :story

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.password?(password)
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def follows?(user)
    out_follows.exists?(followee_id: user.id)
  end

  def liked?(story)
    likes.exists?(story_id: story.id)
  end

  def followees_count
    self.followees.count
  end

  def followers_count
    self.followers.count
  end


end
