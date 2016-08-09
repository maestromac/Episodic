stories = Story.create([
  {author_id: User.find_by(username: 'jdsalinger').id, title: "Once a Week Won't Kill You", body: @jdsalingerOAWWKY},
  {author_id: User.find_by(username: 'jdsalinger').id, title: "Go See Eddie", body: @jdsalingerGSE},
  {author_id: User.find_by(username: 'jdsalinger').id, title: "A Girl I knew", body: @jdsalingerAGIK},
  {author_id: User.find_by(username: 'sking').id, title: "Children of the Corn", body: @skingCOTK},
  {author_id: User.find_by(username: 'sking').id, title: "The Crate", body: @skingTC}
])
