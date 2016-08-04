# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


users = User.create([
  {username: "guest", pen_name:"Guest User", password: "password"},
  {username: "wirving", pen_name: "Washington Irving", password: "password" },
  {username: "iasimov", pen_name: "Isaac Asimov", password: "password" },
  {username: "rbradbury", pen_name: "Ray Bradbury", password: "password" },
  {username: "sking", pen_name: "Stephen King", password: "password" },
  {username: "jdsalinger", pen_name: "J.D. Salinger", password: "password" },
  {username: "ohenry", pen_name: "O. Henry", password: "password" },
  {username: "jupdike", pen_name: "John Updike", password: "password" },
])

stories = Story.create([
  {author_id: User.find_by(username: "guest").id, title: "The story of testing", body: "It Sucks"}
])
