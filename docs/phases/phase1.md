# Phase 1: User Authentication, Note Model and JSON API (2 days, W1 W 6pm)

## Rails
### Models
* User
* Session

### Controllers
* Api::UsersController (create)
* Api::SessionsController (create, destroy, show)

### Views
* api/users/new.html.erb
* api/session/new.html.erb


## Flux
### Views (React Components)
* App
* LoginForm
* SignupForm
* NotesIndex (just a skeleton)

### Stores
* CurrentUser
* Error

### Actions
* `SessionActions.logIn`
* `SessionActions.signUp`
* `SessionActions.fetchCurrentUser`
* `SessionActions.signOut`
* `SessionActions.receiveCurrentUser`
* `SessionActions.removeCurrentUser`
* `ErrorActions.setErrors`
* `ErrorActions.removeErrors`

### ApiUtil
* `logIn`
* `logOut`
* `signUp`  
* `fetchCurrentUser`

## Gems/Libraries
* BCrypt (Gem)
* "babel-core": "^6.2.0",
* "babel-loader": "^6.2.0",
* "babel-preset-react": "^6.1.18",
* "webpack": "^1.12.2",
* "babel-preset-es2015": "^6.9.0",
* "flux": "^2.1.1",
* "react": "^0.14.2",
* "react-dom": "^0.14.2",
* "react-router": "2.0.1"
