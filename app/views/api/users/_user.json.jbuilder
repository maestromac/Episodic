json.extract! user, :id, :pen_name, :description

json.avatar asset_path(user.avatar.url)

json.followees_count user.followees_count
json.followers_count user.followers_count

json.followees user.followees.each do |u|
  json.set! u.id do
    json.extract! u, :id, :pen_name, :description
    json.avatar asset_path(u.avatar.url)
    if logged_in?
      json.followed current_user.follows?(u)
    end

  end
end

json.followers user.followers.each do |u|
  json.set! u.id do
    json.extract! u, :id, :pen_name, :description
    json.avatar asset_path(u.avatar.url)
    if logged_in?
      json.followed current_user.follows?(u)
    end

  end
end

if logged_in?
  json.followed current_user.follows?(user)
end
