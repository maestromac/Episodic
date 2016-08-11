json.extract! user, :id, :pen_name, :description

json.avatar asset_path(user.avatar.url)
json.followees_count user.followees_count
json.followers_count user.followers_count

if logged_in?
  json.followed current_user.follows?(user)
end
