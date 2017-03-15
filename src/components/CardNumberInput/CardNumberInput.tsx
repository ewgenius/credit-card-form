// import './CardNumberInput.scss';
import * as React from 'react';
import { Component, HTMLAttributes } from 'react';

interface CardNumberInputProps extends HTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (e: any) => any;
}

export function displayCardNumber(value: string): string {
  return [0, 4, 8, 12].map((i) => value.slice(i, i + 4)).join(' ');
}

export default class CardNumberInput extends Component<CardNumberInputProps, {
  value: string;
  displayValue: string;
}> {
  state = {
    value: '',
    displayValue: ''
  };

  handleInput = (event) => {
    const prevValue = this.state.value;
    console.log(event);
    if (prevValue.length < 16) {
      const value: string = event.target.value;
      this.setState({
        value
      });
    }
  }

  render() {
    const { value, displayValue } = this.state;
    return <div className='CardNumberInput'>
      <div className='CardNumberInput-value'>{displayValue}</div>
      <input {...this.props} value={value} onChange={this.handleInput} />
    </div>;
  }
}
