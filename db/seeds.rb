10.times do
  user = User.create(
    name: Faker::Cat.name,
    image: Faker::Avatar.image,
    email: Faker::Internet.unique.email,
    password: 'password'
  )
  5.times do
    user.posts.create(
      title: Faker::Hipster.word,
      body: Faker::Hipster.sentence
    )
  end
end