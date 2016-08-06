json.extract! user, :id, :username, :pen_name

json.avatar asset_path(user.avatar.url)
