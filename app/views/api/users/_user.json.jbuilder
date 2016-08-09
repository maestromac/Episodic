json.extract! user, :id, :pen_name, :description

json.avatar asset_path(user.avatar.url)
# json.stories user.stories
