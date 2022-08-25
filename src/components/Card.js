import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SuperTrunfo from './SuperTrunfo';

export default class Card extends Component {
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
    } = this.props;

    return (
      <>
        <div>
          <span data-testid="name-card">
            { cardName }
          </span>
        </div>
        <div>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
        </div>
        <div>
          <span data-testid="description-card">
            { cardDescription }
          </span>
        </div>
        <div>
          <span data-testid="attr1-card">
            { cardAttr1 }
          </span>
        </div>
        <div>
          <span data-testid="attr2-card">
            { cardAttr2 }
          </span>
        </div>
        <div>
          <span data-testid="attr3-card">
            { cardAttr3 }
          </span>
        </div>
        <div>
          <span data-testid="rare-card">
            { cardRare }
          </span>
        </div>
        <div>
          { cardTrunfo ? <SuperTrunfo /> : <span>Carta normal</span>}
        </div>
      </>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;
