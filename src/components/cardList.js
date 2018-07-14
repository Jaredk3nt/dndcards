import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Card from './card';
import { cardFilter, cardSort } from '../utils';

class CardList extends Component {
    render() {
        const { cards, filters, cardCallback } = this.props;
        return (
            <div className="card-list">
                { !cards.length && <h2>Oops... There are no cards here!</h2> }
                {
                    cards.filter(cardFilter(filters)).sort(cardSort(filters.sort)).map(card => (
                        <Card card={card} count={card.count} cardCallback={cardCallback} />
                    ))
                }
            </div>
        );
    }
}

CardList.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        rarity: PropTypes.string,
        id: PropTypes.number,
        type: PropTypes.arrayOf(PropTypes.number),
    })).required,
    filters: PropTypes.shape({
        rarity: PropTypes.string,
        type: PropTypes.number,
        search: PropTypes.string,
        sort: PropTypes.oneOf([
            'byName',
            'byId',
            'byRarity'
        ]),
    })
}

CardList.defaultProps = {
    filters: {
        sort: 'byRarity'
    },
}

export default CardList;

