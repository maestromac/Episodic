# Episodic

[Heroku link][heroku]

[heroku]: http://aa-episodic.herokuapp.com

## Minimum Viable Product

Episodic is a web application inspired by Medium that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [x] Stories
  - [x] Smooth, bug-free navigation
  - [x] Adequate seed data to demonstrate the site's features
  - [x] Adequate CSS styling
- [ ] Commenting on stories
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Follows and feed
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Likes
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Genres
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days, W1 W 6pm)

**Objective:** Functioning rails project with front-end Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication backend setup
- [x] create `StaticPages` controller and root view
- [x] set up webpack & flux scaffold with skeleton files
- [x] setup `APIUtil` to interact with the API
- [x] set up flux cycle for frontend auth
- [x] user signup/signin components
- [x] blank landing component after signin
- [x] style signin/signup components
- [x] seed users

### Phase 2: Stories Model, API, and components (2 days, W1 F 6pm)

**Objective:** Stories can be created, read, edited and destroyed through
the API.

- [x] create `Story` model
- [x] seed the database with a small amount of test data
- [ ] CRUD API for Stories (`StoriesController`)
- [x] jBuilder views for stories
- [ ] test out API interaction in the console.
- implement each story component, building out the flux loop as needed.
  - [x] `StoriesIndex`
  - [x] `StoryIndexItem`
  - [x] `StoryForm`
- [ ] save stories to the DB when the form loses focus or is left idle after editing.
- [x] style stories components
- [x] seed stories

### Phase 3: Comments (2 day, W2 Tu 6pm)

**Objective:** Comment belong to Stories

- [x] create `Comment` model
- build out API, Flux loop, and components for:
  - [ ] Comment CRUD
  - [ ] adding comments requires a story
  - [ ] viewing comments by story
- [ ] Use CSS to style new components
- [x] Seed Comments

Phase 3 adds organization to the comments. Comments belong to a Story,
which has its own `Index` view.

### Phase 4: Follows and Feeds (1 days, W2 W 6pm)
**objective:** Customize Stories Index for user

- [ ] Only display stories from author the user follows
- [ ] display only new or recent stories ( i.e. published within one week ago)


### Phase 5: Allow Complex Styling in Stories (1 days, W2 Th 6pm)

**objective:** Enable complex styling of stories.

- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new Quill elements.
- [ ] Add Quill styling to seeded stories

### Phase 6: - Genres (1 day, W2 F 6pm)

**Objective:** Notes can be tagged with multiple Genres, and Genres are searchable.

- [ ] create `Genre` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching Genres for story
  - [ ] adding Genres to story
  - [ ] creating Genres while adding to stories
  - [ ] searching stories by tag
- [ ] Style new elements
- [ ] Seed Genres and tag the seeded Stories



### Bonus Features (TBD)
- [ ] Search through stories for blocks of text
- [ ] Bonus: Bookmarks
- [ ] Add infinite scrolling

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
