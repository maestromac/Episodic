# Phase 3: Notebooks (2 day, W2 Tu 6pm)

## Rails
### Models
* Notebook
* Tag
* Tagging

### Controllers
* Api::NotebooksController (create, destroy, index, show, update)

### Views
* notebooks/index.json.jbuilder
* notebooks/show.json.jbuilder

## Flux
### Views (React Components)
* NotebooksIndex
  - NotebookIndexItem
* NotebookForm

### Stores
* Notebook

### Actions
* `ApiActions.receiveAllNotebooks`
* `ApiActions.receiveSingleNotebook`
* `ApiActions.deleteNotebook`
* `NotebookActions.fetchAllNotebooks`
* `NotebookActions.fetchSingleNotebook`
* `NotebookActions.createNotebook`
* `NotebookActions.editNotebook`
* `NotebookActions.destroyNotebook`

### ApiUtil
* `ApiUtil.fetchAllNotebooks`
* `ApiUtil.fetchSingleNotebook`
* `ApiUtil.createNotebook`
* `ApiUtil.editNotebook`
* `ApiUtil.destroyNotebook`

## Gems/Libraries
