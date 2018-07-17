import React, { Component } from 'react'

import CardList from '../components/cardList';
import Filter from '../components/filter';
import { gatherArrayFromEdges } from '../utils';

import openSVG from '../data/open.svg';
import closeSVG from '../data/close.svg';

class FamiliarPage extends Component {
  constructor(props) {
    super(props);
    const cardList = gatherArrayFromEdges(this.props.data.allDataJson.edges, "familiars");
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

export default FamiliarPage;

export const query = graphql`
    query familiarQuery {
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
                }
            }
        }
    }
`