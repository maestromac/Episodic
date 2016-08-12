@stories.each do |story|
  json.set! story.id do
    json.partial! 'story', story: story
    json.body     story.truncate_body
    json.readTime story.read_time
  end
end
