json.extract! user, :id, :pen_name

json.avatar asset_path(user.avatar.url)
json.stories user.stories
