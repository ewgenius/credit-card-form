import './CreditCard.scss';
import * as React from 'react';
import { Component, Props } from 'react';

interface CreditCardNumberProps {
  cardNumber: string;
}

const CreditCardNumber = ({ cardNumber }: CreditCardNumberProps) => {
  if (cardNumber.length === 16) {
    const numbers = [0, 4, 8, 12].map((i) => cardNumber.slice(i, i + 4));
    return <div className='CreditCard-number'>
      {numbers.map((block, i) => <span key={i}>{block}</span>)}
    </div>;
  } else {
    return <div>'invalid number'</div>;
  }
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
