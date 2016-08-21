# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# require File.join(File.dirname(__FILE__), "shorts.rb")

# puts jdsalingerGSE

%w{
  0_users
  wirvingTLOSH
  iasimovTLQ
  iasimovG
  rbradburyTOWW
  rbradburyTDITRB
  skingCOTK
  jdsalingerOAWWKY
  jdsalingerGSE
  jdsalingerAGIK
  ohenryTLL
  ohenryTRORC
  jupdikeAP
  1_stories
  2_comments.rb
  3_likes.rb
  4_follows.rb
}.each do |part|
  require File.expand_path(File.dirname(__FILE__))+"/seeds/#{part}.rb"
end
