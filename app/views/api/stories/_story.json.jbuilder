json.extract! story, :id, :author_id, :title, :body, :created_at

json.author story.author.pen_name
json.avatar asset_path(story.author.avatar.url)
