import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class Lista extends Component {
  render() {
    const { cards } = this.props;
    return (
      <span>
        {
          cards.map((card) => (
            <div key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
            </div>
          ))
        }
      </span>
    );
  }
}

Lista.propTypes = {
  cards: PropTypes.array,
}.isRequired;
