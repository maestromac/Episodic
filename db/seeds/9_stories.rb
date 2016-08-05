stories = Story.create([
  {author_id: User.find_by(username: "guest").id, title: "The story of testing", body: "It Sucks lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  {author_id: User.find_by(username: 'jdsalinger').id, title: "Once a Week Won't Kill You", body: @jdsalingerOAWWKY},
  {author_id: User.find_by(username: 'jdsalinger').id, title: "Go See Eddie", body: @jdsalingerGSE},
  {author_id: User.find_by(username: 'sking').id, title: "Children of the Corn", body: @skingCOTK}
])
