import './CreditCard.scss';
import * as React from 'react';
import { Component, Props } from 'react';

import { range } from 'ramda';

enum PaymentSystem {
  AMERICEN_EXPRESS = 3,
  VISA = 4,
  MASTER_CARD = 5
}

interface CreditCardNumberProps {
  cardNumber: string;
}

function completeString(str: string, lenght: number, char = '_'): string {
  const d = lenght - str.length;
  if (d > 0) {
    return range(0, d).reduce((s) => s + '0', str);
  } else {
    return str;
  }
}

const CreditCardNumber = ({ cardNumber }: CreditCardNumberProps) => {
  // if (cardNumber.length === 16) {
  const numbers = [0, 4, 8, 12].map((i) => cardNumber.slice(i, i + 4));
  return <div className='CreditCard-number'>
    {numbers.map((block, i) => <span key={i}>{completeString(block, 4)}</span>)}
  </div>;
  // } else {
  //   return <div></div>;
  // }
};

interface CreditCardHolderProps {
  firstName: string;
  lastName: string;
}

const CreditCardHolder = ({ firstName, lastName }: CreditCardHolderProps) => <div className='CreditCard-holder'>
  {firstName} {lastName}
</div>;

interface CreditCardProps extends CreditCardNumberProps, CreditCardHolderProps {

}

const CreditCard = ({
  cardNumber,
  firstName,
  lastName
}: CreditCardProps) => {
  return <div className='CreditCard CreditCard__dark'>
    <div className='CreditCard-chip' />
    <CreditCardNumber cardNumber={cardNumber} />
    <CreditCardHolder firstName={firstName} lastName={lastName} />
  </div>;
};

export default CreditCard;
