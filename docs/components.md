## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * Navbar
  * NotebooksIndex
    * Search
    * NotebookIndexItem
    * NotebookForm
  * **LoginForm**
  * **SignupForm**
  * **NotesIndex**
    * NoteForm
    * NoteIndexItem
    * **NoteDetail**
      * NoteTags
      * NoteEditArea


## Routes

* **component:** `App` **path:** `/`
  * **component** `LoginForm` **path:** /login
  * **component** `SignupForm` **path:** /signup
  * **component:** `NotesIndex` **path:** index
  * **component:** `NotesIndex` **path:** `notebooks/:notebookId`
    * **component:** `NoteDetail` **path:** `notes/:noteId`
  * **component:** `NotesIndex` **path:** none
    * **component:** `NoteDetail` **path:** `notes/:noteId`

For Routes that have no `notebookId`, `NotesIndex` will render all
notes.
