import React, { Component } from 'react';
import CardList from '../components/cardList';
import CardSideBar from '../components/cardSideBar';
import Pack from '../components/pack';

import { cardIndexInList, gatherArrayFromEdges } from '../utils';

import '../components/collection.css';

class Collection extends Component {
    constructor(props) {
        super(props);
        const cardList = gatherArrayFromEdges(this.props.data.allDataJson.edges, "cardList");
        this.state = {
            collection: [],
            filters: {},
            packOpen: false,
            cardList
        }
    }

    componentDidMount() {
        // Check localStorage for collection
        if (localStorage.hasOwnProperty('cardCollection')) {
            this.setState({
                collection: JSON.parse(localStorage.getItem('cardCollection'))
            });
        }
    }

    addCardToCollection = (card) => {
        let newCollection = this.state.collection;
        let i = cardIndexInList(card, newCollection);
        if (i !== -1) {
            newCollection[i].count++;
        } else {
            let newCard = Object.assign({}, card);
            newCard.count = 1;
            newCollection.push(newCard);
        }
        this.setState({
            collection: newCollection
        }, () => {
            localStorage.setItem('cardCollection', JSON.stringify(this.state.collection));
        });
    } 

    removeCardFromCollection = (card) => {
        let newCollection = this.state.collection;
        let i = cardIndexInList(card, newCollection);
        if (i !== -1) {
            if (newCollection[i].count > 1) {
                newCollection[i].count--;
            } else {
                newCollection.splice(i, 1);
            }
        }
        this.setState({
            collection: newCollection
        }, () => {
            localStorage.setItem('cardCollection', JSON.stringify(this.state.collection));
        });
    } 

    addPack = (cards) => {
        cards.forEach(card => this.addCardToCollection(card));
        this.togglePack();
    }

    togglePack = () => {
        this.setState({ packOpen: !this.state.packOpen });
    }

    render() { 
        const { collection, filters, packOpen, cardList } = this.state;
        return ( 
            <div className="collection-container">
                { packOpen && <Pack cardList={cardList} onAdd={this.addPack} onClose={this.togglePack} /> }
                <section className="card-side-bar-section">
                    <CardSideBar cards={cardList} cardCallback={this.addCardToCollection}/>
                </section>
                <section className="card-collection-section">
                    <div className="collection-toolbar">
                        <div className="collection-toolbar-header">Collection</div>
                        <button className="pack-button" onClick={this.togglePack}>Open a pack</button>
                    </div>
                    <CardList cards={collection} filters={filters} cardCallback={this.removeCardFromCollection}/>
                </section>
            </div>
        );
    }
}
 
export default Collection;

export const query = graphql`
  query cardQueryCollection {
    allDataJson {
      edges {
        node {
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