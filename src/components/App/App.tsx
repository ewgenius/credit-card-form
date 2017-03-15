import './App.scss';
import * as React from 'react';
import { Component } from 'react';

import * as Modal from 'react-modal';

export default class App extends Component<any, {
  showModal: boolean
}> {
  state = {
    showModal: false
  };

  closeModal = () => this.setState({
    showModal: false
  })

  openModal = () => this.setState({
    showModal: true
  })

  render() {
    const { showModal } = this.state;
    return <div className='app'>
      <Modal
        isOpen={showModal}
        onRequestClose={this.closeModal}
        closeTimeoutMS={300}
        className='ReactModal__Content'
        overlayClassName='ReactModal__Overlay'
        contentLabel=''>
        test
      </Modal>
      <button className='ui-button primary' onClick={this.openModal}>open payment form</button>
    </div>;
  }
}
