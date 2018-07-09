import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Card from './card';

class CardList extends Component {

    cardFilter = (card) => {
        const { filters } = this.props;
        let filtered = false
        if (filters.rarity) {
            if (filters.rarity !== card.rarity) filtered = true;
        }
        if (filters.type) {
            if (!card.type.includes(filters.type)) filtered = true;
        }
        if (filters.search) {
            let searchableText = card.name.toLowerCase() + card.description.toLowerCase();
            if (!(searchableText.includes(filters.search.toLowerCase()))) filtered = true;
        }
        return !filtered;
    }

    cardSort = () => {
        const { sort } = this.props.filters;
        

        switch (sort){
            case 'byName':
                return (a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                }
            case 'byId':
                return (a, b) => a.id - b.id;
            case 'byRarity':
                const rarities = ['simple', 'special', 'heroic', 'legendary', 'mythic'];
                return (a, b) => {
                    return rarities.indexOf(a.rarity) - rarities.indexOf(b.rarity);
                }
        }
    }

    render() {
        const { cards, filters } = this.props;
        const sortFn = this.cardSort();
        return (
            <div className="card-list">
                {
                    cards.filter(this.cardFilter).sort(sortFn).map(card => (
                        <Card card={card} count={0} />
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

