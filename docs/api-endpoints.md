# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Stories

- `GET /api/stories`
  - stories index/search
  - accepts `genre_name` query param to list stories by genre
- `POST /api/stories`
- `GET /api/stories/:id`
- `PATCH /api/stories/:id`
- `DELETE /api/stories/:id`

### Comments

- From stories
  - `GET /api/stories/:story_id/comments`
  - `POST /api/stories/:story_id/comments`
  - `GET /api/stories/:story_id/comments/:id`
  - `PATCH /api/stories/:story_id/comments/:id`
  - `DELETE /api/stories/:story_id/comments/:id`
- From Users
  - `GET /api/users/:user_id/comments`
  - `POST /api/users/:user_id/comments`
  - `GET /api/users/:user_id/comments/:id`
  - `PATCH /api/users/:user_id/comments/:id`
  - `DELETE /api/users/:user_id/comments/:id`

### Genres

- A story's genre will be included in the stories show template
- `GET /api/genres`
- `POST /api/stories/:story_id/genres`: add genre to story by name
  - if note doesn't already exist, it will be created
- `DELETE /api/stories/:story_id/genres/:story_name`: remove tag from note by
  name
