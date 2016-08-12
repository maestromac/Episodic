import { Link, hashHistory} from 'react-router';

const React = require('react'),
      SessionStore = require('../stores/session_store'),
      StoryActions = require('../actions/story_actions'),
      StoryStore = require('../stores/story_store');

import MediumEditorReact from 'react-medium-editor';
import MediumEditor from 'medium-editor';
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/beagle.css');
require(
  'medium-editor-insert-plugin/dist/css/medium-editor-insert-plugin.min.css'
);


require('jquery/dist/jquery.min');
require('medium-editor/dist/js/medium-editor.js');
require('handlebars/dist/handlebars.runtime.min');
require('jquery-sortable/source/js/jquery-sortable-min');
require('blueimp-file-upload/js/vendor/jquery.ui.widget.js');
require('blueimp-file-upload/js/jquery.iframe-transport');

window.fileUpload = require('blueimp-file-upload/js/jquery.fileupload');
window.MediumInsert = require('medium-editor-insert-plugin/dist/js/medium-editor-insert-plugin').MediumInsert;

const StoryForm = React.createClass({
  getInitialState () {
    return {
      author_id: SessionStore.currentUser().id,
      title: "",
      body: ""
    };
  },

  componentDidMount () {
    this.listener = StoryStore.addListener(this._onChange);
    // this.editor = new MediumEditor('.editable', {
    //   placeholder: {
    //     text: 'Tell a story...',
    //     color: 'gray',
    //     hideOnClick: true
    //   }
    // });
    // this.editor.subscribe('editableInput', (event, editable) => {
    //   this.setState({ body: event.currentTarget.innerHTML });
    // });

    // $('.editable').mediumInsert({
    //   editor: this.editor,
    //   addons: {
    //     images: {
    //       deleteScript: '/image/files/',
    //       deleteMethod: 'DELETE',
    //       preview: true,
    //       captions: true,
    //       captionPlaceholder: 'ì�´ë¯¸ì§€ ìº¡ì…˜ì�„ ìž…ë ¥í•˜ì„¸ìš”(ì˜µì…˜)',
    //       fileUploadOptions: {
    //         url: '/image',
    //         acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
    //       }
    //     }
    //   }
    // });

  },

  componentWillUnmount () {
    this.listener.remove();
  },

  _onChange () {
    let latestStory = StoryStore.latestStory().id;
    if ( latestStory ) {
      hashHistory.push(`/stories/${latestStory}`);
    }
  },

  handleSubmit (e) {
    e.preventDefault();
    StoryActions.createStory(this.state);
  },

  handleTitleChange (e) {
    e.preventDefault();
    this.setState({ title: e.target.value});
  },

  // handleBodyChange (e) {
  //   e.preventDefault();
  //   this.setState({ body: e.target.value});
  // },

  handleBodyChange (text, medium) {
    this.setState({ body: text});
  },

  // <textarea
  //   className="form-story-body"
  //   value={this.state.body}
  //   onChange={this.handleBodyChange}
  //   placeholder="Tell a story..."
  //   />


  // <textarea
  //   className="editable"
  //   value={this.state.body}
  // />

  render () {

    return (
      <div className="center">
        <div className="form-story">

          <form onSubmit={this.handleSubmit}>
            <input
              className="form-story-title"
              type="text"
              value={this.state.title}
              onChange={this.handleTitleChange}
              placeholder="Title"
              />
            <br />
            <br />
             <MediumEditorReact
             text={this.state.body}
             onChange={this.handleBodyChange}
             options={
               {placeholder: { text: 'Tell a story...', hideOnClick: true}}
             }
             />

            <br />
            <button className="medium-color">Publish</button>
          </form>

        </div>
      </div>
    );
  }
});

module.exports = StoryForm;
