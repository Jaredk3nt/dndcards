import React, { Component } from 'react';
import CardList from './cardList';

import './collection.css';

class CardSidebar extends Component {
    state = {
        filters: {
            sort: "byName"
        }
    }

    updateSearch = (e) => {
        this.setState({
            filters: {
                ...this.state.filters,
                search: e.target.value
            }
        })
    }

    selectCard = (card) => {
        this.props.cardCallback(card);
    }

    render() { 
        const { filters } = this.state;
        const { cards } = this.props;
        return ( 
            <div className="card-side-bar">
                <section className="search-section">
                    <p>Search:</p>
                    <input value={this.state.filters.search} onChange={this.updateSearch}/>
                </section>
                <section className="card-list-section">
                    <CardList cards={this.props.cards} filters={this.state.filters} cardCallback={this.selectCard}/>
                </section>
            </div>
        )
    }
}
 
export default CardSidebar;