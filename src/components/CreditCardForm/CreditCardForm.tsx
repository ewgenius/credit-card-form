import './CreditCardForm.scss';
import * as React from 'react';
import { Component, Props } from 'react';

import CreditCard from '../CreditCard/CreditCard';

interface CreditCardFormProps extends Props<CreditCardForm> {

}

export default class CreditCardForm extends Component<CreditCardFormProps, {}> {
  render() {
    return <div className='CreditCardForm'>
      <CreditCard
        cardNumber='0000000000000000'
        firstName='Fake'
        lastName='Fakovich' />
      <form>
        <input />
      </form>
    </div>;
  }
}
