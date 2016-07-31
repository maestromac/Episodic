# Schema Information

## Stories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
story_id    | integer   | not null, foreign key (references users), indexed
user_id     | string    | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
story_id    | string    | not null, foreign key (references notes), indexed
body        | text      | not null
date        | datetime  | not null

## genres
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## genre_assoiations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
story_id    | integer   | not null, foreign key (references notes), indexed, unique [tag_id]
genre_id    | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
