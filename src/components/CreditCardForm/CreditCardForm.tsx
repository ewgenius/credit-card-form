import './CreditCardForm.scss';
import * as React from 'react';
import { Component, Props } from 'react';

import CreditCard from '../CreditCard/CreditCard';

interface CreditCardFormProps extends Props<CreditCardForm> {

}

export default class CreditCardForm extends Component<CreditCardFormProps, {
  cardNumber?: string
}> {
  state = {
    cardNumber: ''
  };

  handleNumberInput = (e) => this.setState({
    cardNumber: e.target.value
  })

  render() {
    const { cardNumber } = this.state;
    return <div className='CreditCardForm'>
      <CreditCard
        cardNumber={cardNumber}
        firstName='Fake'
        lastName='Fakovich' />
      <form>
        <input
          value={this.state.cardNumber}
          onChange={this.handleNumberInput} />
      </form>
    </div>;
  }
}
