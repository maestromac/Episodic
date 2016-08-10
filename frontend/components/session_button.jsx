const React = require('react'),
      Modal = require('react-modal'),
      ModalStyle = require('./modal_style'),
      SessionHub = require('./session_hub');

const SessionButton = React.createClass({
  getInitialState () {
    return { modalOpen: false };
  },

  _onModalOpen () {
    this.setState({ modalOpen: true });
  },

  _onModalClose () {
    this.setState({ modalOpen: false });
    ModalStyle.content.opacity = 0;
  },

  _toggleOpague () {
    ModalStyle.content.opacity = 100;
  },

  render () {

    return (
      <div>
        <button onClick={this._onModalOpen}> {this.props.name}
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this._onModalClose}
            style={ModalStyle}
            onAfterOpen={this._toggleOpague}
            >
            <SessionHub />
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

module.exports = SessionButton;
