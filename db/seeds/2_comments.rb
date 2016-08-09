comments = Comment.create([
  {
    commenter_id: User.find_by(username: "sking").id,
    story_id: Story.find_by(title: "Once a Week Won't Kill You").id,
    body: "I've read better stories"
  },

  {
    commenter_id: User.find_by(username: "sking").id,
    story_id: Story.find_by(title: "Go See Eddie").id,
    body: "The Eddie I know wouldn't take any of this"
  },

  {
    commenter_id: User.find_by(username: "sking").id,
    story_id: Story.find_by(title: "A Girl I knew").id,
    body: "If only you knew a girl"
  },

])
