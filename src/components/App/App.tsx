import './App.scss';
import * as React from 'react';
import { Component } from 'react';

import * as Modal from 'react-modal';
import CreditCardForm from '../CreditCardForm/CreditCardForm';
import CreditCard from '../CreditCard/CreditCard';

export default class App extends Component<any, {
  showModal?: boolean;
  cardStyle?: 'light' | 'dark';
}> {
  constructor() {
    super();
    this.state = {
      showModal: false,
      cardStyle: 'dark'
    };
  }

  closeModal = () => this.setState({
    showModal: false
  })

  openModal = () => this.setState({
    showModal: true
  })

  toggleCardStyle = () => this.setState((state) => ({
    cardStyle: state.cardStyle === 'light' ? 'dark' : 'light'
  }))

  render() {
    const { showModal, cardStyle } = this.state;
    return <div className='App'>
      <Modal
        isOpen={showModal}
        onRequestClose={this.closeModal}
        closeTimeoutMS={300}
        className='ReactModal__Content'
        overlayClassName='ReactModal__Overlay'
        contentLabel=''>
        <CreditCardForm />
      </Modal>

      <div className='flex-space' />

      <button className='button' style={{ marginBottom: 16 }} onClick={this.toggleCardStyle}>{cardStyle}</button>

      <CreditCard
        cardNumber='0000000000000000'
        firstName='Fake'
        lastName='Fakovich'
        validMonth='01'
        validYear='19'
        style={cardStyle} />
      <div className='flex-space' />

      <button className='button button-primary' onClick={this.openModal}>open payment form</button>
      <div className='flex-space' />
      <div className='about'>
        PAYMENT FORM DEMO<br />
        source: <a href='https://github.com/ewgenius/credit-card-form' target='_blank'>github</a><br />
        created by <a href='https://ewgenius.info' target='_blank'>Evgeniy Khramkov</a>
      </div>
    </div>;
  }
}
