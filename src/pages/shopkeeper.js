import React, { Component } from 'react';
import CardList from '../components/cardList';
import Pack from '../components/pack';

import { cardIndexInList, gatherArrayFromEdges } from '../utils';

import './shopkeeper.css';

class Shopkeeper extends Component {
    constructor(props) {
        super(props);
        const path = this.props.location.pathname;
        const skname = path.slice(13, path.length).split("-").join(" ");
        const sks = gatherArrayFromEdges(this.props.data.allDataJson.edges, "shopkeepers").filter(sk => {
            if (sk.name.toLowerCase() === skname) {
                return true;
            }
            return false;
        })
        
        let sk = sks[0] || { "name": "n/a", "city": "n/a", "cards": [] };
        const cardList = gatherArrayFromEdges(this.props.data.allDataJson.edges, "cardList");
        if (sk.cards.length && typeof sk.cards[0] === "number") {
            sk.cards = sk.cards.map(cardId => {
                return cardList[cardId];
            });
        }
        console.log(sk.packs)
        this.state = {
            shopkeep: sk,
            packOpen: false,
            cardList
        }
    }

    addPack = (cards) => {
        let collection = JSON.parse(localStorage.getItem('cardCollection'));
        cards.forEach(card => {
            let i = cardIndexInList(card, collection);
            if (i !== -1) {
                collection[i].count++;
            } else {
                let newCard = Object.assign({}, card);
                newCard.count = 1;
                collection.push(newCard);
            }
        });
        
        localStorage.setItem('cardCollection', JSON.stringify(collection));
        this.togglePack();
    }

    togglePack = () => {
        this.setState({ packOpen: !this.state.packOpen });
    }

    render() { 
        const { shopkeep, packOpen, cardList } = this.state;
        return ( 
            <div className="shop-keeper-page">
                { packOpen && <Pack cardList={cardList} onAdd={this.addPack} onClose={this.togglePack} /> }
                <div className="sk-section">
                    <h3>{ shopkeep.city }</h3>
                    <h1>{ shopkeep.name }</h1>
                    <hr />
                    {
                        (shopkeep.packs !== null && shopkeep.packs !== undefined) && (
                            <h2>
                                Packs { `(x${ shopkeep.packs.quantity })` }
                            </h2>
                        )
                    }
                    {
                        (shopkeep.packs !== null && shopkeep.packs !== undefined) && (
                            <button className="buy-pack-button" onClick={this.togglePack}>
                                Buy pack for { shopkeep.packs.price } gp
                            </button> 
                        )
                    }
                    
                    <h2>Cards</h2>
                    <CardList cards={shopkeep.cards} />
                </div>
                
            </div> 
        );
    }
}
 
export default Shopkeeper;

export const query = graphql`
    query shopkeeperQuery {
        allDataJson {
            edges {
                node {
                    shopkeepers {
                        name
                        city
                        cards
                        packs {
                            quantity
                            price
                        }
                    }
                    cardList {
                        id
                        name
                        rarity
                        description
                        type
                    }
                }
            }
        }
    }
`