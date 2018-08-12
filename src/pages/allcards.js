import React, { Component } from 'react'

import CardList from '../components/cardList';
import Filter from '../components/filter';
import { gatherArrayFromEdges } from '../utils';

import openSVG from '../data/open.svg';
import closeSVG from '../data/close.svg';

class AllCards extends Component {
  constructor(props) {
    super(props);
    const cardList = gatherArrayFromEdges(this.props.data.allDataJson.edges, "cardList");
    this.state = {
      filters: {
        sort: 'byRarity',
      },
      filterOpen: true,
      cardList,
    }
  }

  updateFilters = (filters) => {
    this.setState({
      filters
    });
  }

  render() {
    const { cardList, filterOpen, filters } = this.state;
    return (
      <div className={`card-page ${filterOpen ? 'filter-open' : ''}`} >
        <div className="card-list-wrapper">
          <CardList 
            cards={cardList}  
            filters={filters}/>
        </div>
        <div 
          className={`filter-toggle ${filterOpen ? 'open' : ''}`}
          onClick={() => this.setState({ filterOpen: !filterOpen})}>
          {
            this.state.filterOpen ? (<img src={closeSVG} />) : (<img src={openSVG} />)
          }
        </div>
        {
          this.state.filterOpen && <Filter filterCallback={this.updateFilters} filters={filters}/>
        }
      </div>
    )
  };
}

export default AllCards;

export const query = graphql`
  query cardQuery {
    allDataJson {
      edges {
        node {
          familiars {
            id
            name
            rarity
            description
            type
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
