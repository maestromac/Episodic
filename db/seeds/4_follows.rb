follows = Follow.create([






  {followee_id: User.find_by(username: 'iasimov').id, follower_id: User.find_by(username: 'rbradbury').id},
  {followee_id: User.find_by(username: 'iasimov').id, follower_id: User.find_by(username: 'sking').id},
  {followee_id: User.find_by(username: 'iasimov').id, follower_id: User.find_by(username: 'ohenry').id},
  {followee_id: User.find_by(username: 'iasimov').id, follower_id: User.find_by(username: 'jupdike').id},

  {followee_id: User.find_by(username: 'rbradbury').id, follower_id: User.find_by(username: 'iasimov').id},
  {followee_id: User.find_by(username: 'rbradbury').id, follower_id: User.find_by(username: 'sking').id},
  {followee_id: User.find_by(username: 'rbradbury').id, follower_id: User.find_by(username: 'jdsalinger').id},
  {followee_id: User.find_by(username: 'rbradbury').id, follower_id: User.find_by(username: 'ohenry').id},

  {followee_id: User.find_by(username: 'sking').id, follower_id: User.find_by(username: 'iasimov').id},
  {followee_id: User.find_by(username: 'sking').id, follower_id: User.find_by(username: 'jdsalinger').id},
  {followee_id: User.find_by(username: 'sking').id, follower_id: User.find_by(username: 'jupdike').id},

  {followee_id: User.find_by(username: 'jdsalinger').id, follower_id: User.find_by(username: 'iasimov').id},
  {followee_id: User.find_by(username: 'jdsalinger').id, follower_id: User.find_by(username: 'rbradbury').id},
  {followee_id: User.find_by(username: 'jdsalinger').id, follower_id: User.find_by(username: 'sking').id},
  {followee_id: User.find_by(username: 'jdsalinger').id, follower_id: User.find_by(username: 'jupdike').id},
  {followee_id: User.find_by(username: 'ohenry').id, follower_id: User.find_by(username: 'iasimov').id},
  {followee_id: User.find_by(username: 'ohenry').id, follower_id: User.find_by(username: 'rbradbury').id},
  {followee_id: User.find_by(username: 'ohenry').id, follower_id: User.find_by(username: 'sking').id},
  {followee_id: User.find_by(username: 'ohenry').id, follower_id: User.find_by(username: 'jdsalinger').id},
  {followee_id: User.find_by(username: 'ohenry').id, follower_id: User.find_by(username: 'jupdike').id},

  {followee_id: User.find_by(username: 'jupdike').id, follower_id: User.find_by(username: 'iasimov').id},
  {followee_id: User.find_by(username: 'jupdike').id, follower_id: User.find_by(username: 'rbradbury').id},
  {followee_id: User.find_by(username: 'jupdike').id, follower_id: User.find_by(username: 'jdsalinger').id},
  {followee_id: User.find_by(username: 'jupdike').id, follower_id: User.find_by(username: 'ohenry').id},

])
