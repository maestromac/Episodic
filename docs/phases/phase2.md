# Phase 2: Flux Architecture and Note CRUD (2 days, W1 F 6pm)

## Rails
### Models
* Note

### Controllers
* Api::NotesController (create, destroy, index, show, update)

### Views
* notes/index.json.jbuilder
* notes/show.json.jbuilder

## Flux
### Views (React Components)
* NotesIndex
  - NotesIndexItem
* NoteForm

### Stores
* Note

### Actions
* `ApiActions.receiveAllNotes`
* `ApiActions.receiveSingleNote`
* `ApiActions.deleteNote`
* `NoteActions.fetchAllNotes`
* `NoteActions.fetchSingleNote`
* `NoteActions.createNote`
* `NoteActions.editNote`
* `NoteActions.destroyNote`

### ApiUtil
* `ApiUtil.fetchAllNotes`
* `ApiUtil.fetchSingleNote`
* `ApiUtil.createNote`
* `ApiUtil.editNote`
* `ApiUtil.destroyNote`

## Gems/Libraries
