import './CreditCardForm.scss';
import * as React from 'react';
import { Component, Props } from 'react';

import CreditCard from '../CreditCard/CreditCard';
import CardNumberInput from '../CardNumberInput/CardNumberInput';

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
      <form>
        <div className='form-field'>
          <label htmlFor='card_number'>Enter card number</label>
          <CardNumberInput
            value={this.state.cardNumber}
            onChange={this.handleNumberInput} />
          <input
            id='card_number'
            name='card_number'
            type='text'
            value={this.state.cardNumber}
            onChange={this.handleNumberInput} />
        </div>
      </form>
    </div>;
  }
}
