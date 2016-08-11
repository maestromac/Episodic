@stories.each do |story|
  json.set! story.id do
    json.partial! 'story', story: story
    # json.body truncate(Nokogiri::HTML(story.body).text, length: 284, separator: ' ', :escape => false)
    json.body     story.truncate_body
    json.readTime story.read_time
  end
end
