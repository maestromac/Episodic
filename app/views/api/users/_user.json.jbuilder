json.extract! user, :id, :pen_name, :description

json.avatar asset_path(user.avatar.url)

if logged_in?
  json.followed current_user.follows?(user)
end
