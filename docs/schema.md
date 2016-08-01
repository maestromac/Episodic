# Schema Information

## Stories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed

## Likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
story_id    | integer   | not null, foreign key (references stories), indexed
user_id     | string    | not null, foreign key (references users), indexed

## Comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
story_id    | string    | not null, foreign key (references stories), indexed
body        | text      | not null
date        | datetime  | not null

## Follows

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references user), indexed, unique [follower_id]
follower_id | integer   | not null, foreign key (references user), indexed


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

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
