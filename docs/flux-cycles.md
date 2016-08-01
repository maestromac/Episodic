# Flux Cycles

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. stores in `_currentUser` in `CurrentUserStore`
* `removeCurrentUser`
  0. invoked from an API callback
  0. removes `_currentUser` in `CurrentUserStore`

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. sets `form` and `_errors` in the `ErrorStore`
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. removes `_errors` for a given `form` in the `ErrorStore`

## Story Cycles

### Stories API Request Actions

* `fetchAllStories`
  0. invoked from `StoriesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/stories` is called.
  0. `receiveAllStories` is set as the success callback.

* `createStory`
  0. invoked from new note button `onClick`
  0. `POST /api/stories` is called.
  0. `receiveSingleStory` is set as the success callback.

* `fetchSingleNote`
  0. invoked from `StoryDetail` `didMount`/`willReceiveProps`
  0. `GET /api/stories/:id` is called.
  0. `receiveSingleStory` is set as the success callback.

* `updateStory`
  0. invoked from `StoryForm` `onSubmit`
  0. `POST /api/stories` is called.
  0. `receiveSingleStory` is set as the success callback.

* `destroyStory`
  0. invoked from delete note button `onClick`
  0. `DELETE /api/stories/:id` is called.
  0. `removeStory` is set as the success callback.

### Notes API Response Actions

* `receiveAllStores`
  0. invoked from an API callback.
  0. `Story` store updates `_stories` and emits change.

* `receiveSingleStory`
  0. invoked from an API callback.
  0. `Story` store updates `_stories[id]` and emits change.

* `removeStory`
  0. invoked from an API callback.
  0. `Story` store removes `_stories[id]` and emits change.

### Store Listeners

* `StoriesIndex` component listens to `Story` store.
* `StoryDetail` component listens to `Story` store.


## Comment Cycles

### Comments API Request Actions

* `fetchAllComments`
  0. invoked from `CommentsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/comments` is called.
  0. `receiveAllComments` is set as the success callback.

* `createComment`
  0. invoked from new comment button `onClick`
  0. `POST /api/comments` is called.
  0. `receiveSingleComment` is set as the callback.

* `fetchSingleComment`
  0. invoked from `CommentDetail` `didMount`/`willReceiveProps`
  0. `GET /api/comments/:id` is called.
  0. `receiveSingleComment` is set as the success callback.

* `updateComment`
  0. invoked from `CommentForm` `onSubmit`
  0. `POST /api/comments` is called.
  0. `receiveSingleComment` is set as the success callback.

* `destroyComment`
  0. invoked from delete comment button `onClick`
  0. `DELETE /api/comments/:id` is called.
  0. `removeComment` is set as the success callback.

### Comments API Response Actions

* `receiveAllComments`
  0. invoked from an API callback.
  0. `Comment` store updates `_comments` and emits change.

* `receiveSingleComment`
  0. invoked from an API callback.
  0. `Comment` store updates `_comments[id]` and emits change.

* `removeComment`
  0. invoked from an API callback.
  0. `Comment` store removes `_comments[id]` and emits change.

### Store Listeners

* `CommmentsIndex` component listens to `Commment` store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `StorySearchBar` `onChange` when there is text
  0. `GET /api/notes` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the success callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `StorySearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
