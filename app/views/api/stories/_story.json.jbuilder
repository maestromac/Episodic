json.extract! story, :id, :author_id, :title, :body, :created_at, :updated_at

json.author story.author.pen_name
json.author_des story.author.description
json.avatar asset_path(story.author.avatar.url)
json.comments_count story.comments_count
json.likes story.likers.length
json.comments story.comments.length
json.readTime story.read_time



if logged_in?
  json.liked current_user.liked?(story)
end
