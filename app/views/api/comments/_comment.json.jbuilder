json.extract! comment, :commenter_id, :story_id, :body, :created_at

json.commenter comment.commenter.pen_name
json.avatar asset_path(comment.commenter.avatar.url)
json.story_title comment.story.title
json.story_author comment.story.author.pen_name
