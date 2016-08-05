# Phase 2: Flux Architecture and Story CRUD (2 days, W1 F 6pm)

## Rails
### Models
* Story

### Controllers
* Api::StoriesController (create, destroy, index, show, update)

### Views
* stories/index.json.jbuilder
* stories/show.json.jbuilder

## Flux
### Views (React Components)
* StoriesIndex
  - StoriesIndexItem
* StoryForm

### Stores
* Story

### Actions
* `ApiActions.receiveAllStories`
* `ApiActions.receiveSingleStory`
* `ApiActions.deleteStory`
* `StoryActions.fetchAllStories`
* `StoryActions.fetchSingleStory`
* `StoryActions.createStory`
* `StoryActions.editStory`
* `StoryActions.destroyStory`

### StoryApiUtil
* `StoryApiUtil.fetchAllStories`
* `StoryApiUtil.fetchSingleStory`
* `StoryApiUtil.createStory`
* `StoryApiUtil.editStory`
* `StoryApiUtil.destroyStory`

## Gems/Libraries
