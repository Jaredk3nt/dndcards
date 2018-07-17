import React, { Component } from 'react';
import Card from './card';
import CardList from './cardList';
import './pack.css';

const rt = [0.70, 0.90, 0.99];

class Pack extends Component {
    state = {
        cards: [],
    }

    componentDidMount() {
        let cardLists = this.sortCards();
        let cards = []
        let i = 0;
        while(i < 4) {
            let rarity = this.pickRarity();
            let rand = this.getRandomInt(cardLists[rarity].length - 1);
            cards.push(cardLists[rarity][rand]);
            i++;
        }
        this.setState({ cards });
    }

    sortCards = () => {
        let crl = { simple: [], special: [], heroic: [], legendary: [], mythic: [] }
        this.props.cardList.forEach(card => {
            crl[card.rarity].push(card);
        });
        return crl;
    }

    pickRarity = () => {
        let r = Math.random();
        let rarity = "";
        if(r <= rt[0]) {    // get simple
            rarity = "simple";
        } else if(r > rt[0] && r < rt[1]) { // get special
            rarity = "special";
        } else if(r > rt[1] && r < rt[2]) {  // get heroic
            rarity = "heroic";
        } else {    // get legendary
            rarity = "legendary";
        }
        return rarity;
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    render() { 
        const { onClose, onAdd } = this.props;
        let { cards } = this.state;
        return ( 
            <div className="pack-wrapper">
                <div className="pack-container">
                    <div className="cards-container">
                        <CardList cards={this.state.cards} />
                    </div>
                    <div className="button-container">
                        <button className="close-button button" onClick={onClose}>close</button>
                        <button className="add-button button" onClick={() => onAdd(cards)}>add cards</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Pack;