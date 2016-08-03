# Schema Information

## Stories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
created_at  | timestamps| not null
updated_at  | timestamps| not null

## Likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
story_id    | integer   | not null, foreign key (references stories), indexed
user_id     | string    | not null, foreign key (references users), indexed
created_at  | timestamps| not null
updated_at  | timestamps| not null

## Comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
story_id    | string    | not null, foreign key (references stories), indexed
body        | text      | not null
created_at  | timestamps| not null
updated_at  | timestamps| not null

## Follows

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references user), indexed, unique [follower_id]
follower_id | integer   | not null, foreign key (references user), indexed
created_at  | timestamps| not null
updated_at  | timestamps| not null


## Genres
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## Genre_assoiations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
story_id    | integer   | not null, foreign key (references stories), indexed, unique [story_id]
genre_id    | integer   | not null, foreign key (references genres), indexed
created_at  | timestamps| not null
updated_at  | timestamps| not null

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
penname         | string    | not null, indexed
profile_picture |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
created_at      | timestamps| not null
updated_at      | timestamps| not null
