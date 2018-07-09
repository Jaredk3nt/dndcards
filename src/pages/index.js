import React, { Component } from 'react'

import CardList from '../components/cardList';
import Filter from '../components/filter';

import openSVG from '../data/open.svg';
import closeSVG from '../data/close.svg';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        sort: 'byRarity',
      },
      filterOpen: true,
    }
  }

  updateFilters = (filters) => {
    this.setState({
      filters
    });
  }

  render() {
    const { data } = this.props;
    return (
      <div className={`card-page ${this.state.filterOpen ? 'filter-open' : ''}`} >
        <CardList 
          cards={data.allDataJson.edges[0].node.cardList} 
          familiars={data.allDataJson.edges[0].node.familiars} 
          filters={this.state.filters}/>
        <div 
          className={`filter-toggle ${this.state.filterOpen ? 'open' : ''}`}
          onClick={() => this.setState({ filterOpen: !this.state.filterOpen})}>
          {
            this.state.filterOpen ? (<img src={closeSVG} />) : (<img src={openSVG} />)
          }
        </div>
        {
          this.state.filterOpen && <Filter filterCallback={this.updateFilters} filters={this.state.filters}/>
        }
      </div>
    )
  };
}

export default IndexPage;

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
