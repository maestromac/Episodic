const React = require('react'),
      Modal = require('react-modal'),
      ModalStyleFollow = require('./modal_style_follow'),
      SessionHub = require('./session_hub'),
      FollowsIndex = require('./follows_index');

const FollowCountsButton = React.createClass({
  getInitialState () {
    return { modalOpen: false };
  },

  _onModalOpen () {
    this.setState({ modalOpen: true });
  },

  _onModalClose () {
    this.setState({ modalOpen: false });
    ModalStyleFollow.content.opacity = 0;
  },

  _toggleOpague () {
    ModalStyleFollow.content.opacity = 100;
  },

  render () {

    return (
      <div>
        <button onClick={this._onModalOpen}> {this.props.name}
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this._onModalClose}
            style={ModalStyleFollow}
            onAfterOpen={this._toggleOpague}
            >
            <FollowsIndex users={this.props.users} />
            <button
              className="modal-button"
              onClick={this._onModalClose}>
              X
            </button>
          </Modal>
        </button>
      </div>
    );
  }
});

module.exports = FollowCountsButton;
