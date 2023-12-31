import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Lista from './components/Lista';

export default class App extends Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cards: [],
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const min = 0;
      const max = 90;
      const total = 210;
      const {
        cardName,
        cardDescription,
        cardImage,
        cardAttr1,
        cardAttr2,
        cardAttr3,
      } = this.state;
      const cardSum = +cardAttr1 + +cardAttr2 + +cardAttr3;
      if (cardName
        && cardDescription
        && cardImage
        && cardAttr1 <= max
        && cardAttr2 <= max
        && cardAttr3 <= max
        && cardAttr1 >= min
        && cardAttr2 >= min
        && cardAttr3 >= min
        && (cardSum <= total)
      ) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  };

  onSaveButtonClick = (card) => {
    const { cards } = this.state;
    this.setState(
      () => ({
        cards: [...cards, card],
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
      }),
      () => {
        if (card.cardTrunfo) {
          this.setState({
            hasTrunfo: true,
          });
        }
      },
    );
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cards,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <Lista
          cards={ cards }
        />
      </div>
    );
  }
}
// INCIANDO! vrummm
// referencias videos youtube => https://www.youtube.com/watch?v=ab7nqBDC7iE&ab_channel=MateusFernandes
// https://www.youtube.com/watch?v=uRT_-8uPvkg&ab_channel=MateusFernandes
// https://www.youtube.com/watch?v=WSgCWVDvUK4&ab_channel=MateusFernandes
// https://www.youtube.com/watch?v=IuZkmFpsJk0&ab_channel=MateusFernandes
// https://www.youtube.com/watch?v=Nd69RXF41kA&ab_channel=MateusFernandes
// https://www.youtube.com/watch?v=JFwKSskAAZ0&ab_channel=MateusFernandes
