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
    let modal = (
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
    );
    let klass = this.props.klass;
    let button;
    if (klass) {
      button = (
        <div>
          <button
            className={klass}
            onClick={this._onModalOpen}/>   {this.props.name}
            {modal}

        </div>
      );
    } else {
      button = (
        <button onClick={this._onModalOpen} >
          {modal}
          {this.props.name}
        </button>
      );
    }

    return (
      <div>
        {button}
      </div>
    );
  }
});

module.exports = SessionButton;
