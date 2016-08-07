@stories.each do |story|
  json.set! story.id do
    json.partial! 'story', story: story
    json.body truncate(story.body, length: 284, separator: ' ', :escape => false)
    json.readTime story.body.split.length/275
  end
end
