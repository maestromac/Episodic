const React = require('react'),
      Modal = require('react-modal'),
      ModalStyleDelete = require('./modal_style_delete'),
      SessionHub = require('./session_hub'),
      StoryActions = require('../actions/story_actions');

const DeleteButton = React.createClass({
  getInitialState () {
    return { modalOpen: false };
  },

  _onModalOpen () {
    this.setState({ modalOpen: true });
  },

  _onModalClose () {
    this.setState({ modalOpen: false });
    ModalStyleDelete.content.opacity = 0;
  },

  _toggleOpague () {
    ModalStyleDelete.content.opacity = 100;
  },

  _handleDelete (e) {
    e.preventDefault();
    //are you sure you want to delete this
    StoryActions.destroyStory(this.props.id);
    this._onModalClose();
  },

  render () {
    let modal = (
      <Modal
        isOpen={this.state.modalOpen}
        onRequestClose={this._onModalClose}
        style={ModalStyleDelete}
        onAfterOpen={this._toggleOpague}
        >
        <div className="delete-model">
          <h1>Deleted Stories are gone forever, Are you sure?</h1>
          <ul>
            <li><button onClick={this._handleDelete}>Delete</button></li>
            <li><button onClick={this._onModalClose}>Cancel</button></li>
          </ul>
        </div>
        <button
          className="modal-button"
          onClick={this._onModalClose}>
          X
        </button>
      </Modal>
    );

    return (

      <div>
        <button
          onClick={this._onModalOpen}>   Delete
          {modal}
        </button>
      </div>

    );
  }
});

module.exports = DeleteButton;
