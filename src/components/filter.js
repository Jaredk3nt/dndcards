import React, { Component } from 'react';

const sortTypes = ['byName', 'byId', 'byRarity'];
const rarities = ['simple', 'special', 'heroic', 'legendary', 'mythic'];

class Filter extends Component {
    state = {}

    clearFilters = () => {
        this.props.filterCallback({});
    }

    updateFilters = (filter, update) => {
        const { filters } = this.props;
        console.log(`${filter} :: ${update}`)
        if (filters[filter] === update) {
            this.props.filterCallback({
                ...this.props.filters,
                [filter]: ''
            });
        } else {
            this.props.filterCallback({
                ...this.props.filters,
                [filter]: update
            });
        }
        console.log(filters)
    }

    // Generate a callback so the filter button doesn't need to know its type
    updateFiltersCallback = (filter) => {
        return (update) => {
            this.updateFilters(filter, update);
        }
    }

    render() {
        const { filters } = this.props; 
        return ( 
            <div className="filter-container">
                <h1>Filters</h1>
                <section className="filter-section">
                    <p>Search:</p>
                    <input className="filter-input" onChange={(e) => this.updateFiltersCallback('search')(e.target.value)}/>
                </section>
                <section className="filter-section">
                    <p>Sort by:</p>
                    <div className="filter-button-wrapper">
                        {
                            sortTypes.map(sort => (
                                <FilterButton 
                                    title={sort} 
                                    callback={this.updateFiltersCallback('sort')}
                                    active={filters.sort === sort} />
                            ))
                        }
                    </div>
                </section>
                <section className="filter-section">
                    <p>Filter by:</p>
                    <div className="filter-button-wrapper">
                        {
                            rarities.map(rarity => (
                                <FilterButton 
                                    title={rarity} 
                                    callback={this.updateFiltersCallback('rarity')}
                                    active={filters.rarity === rarity} />
                            ))
                        }
                    </div>
                </section>
                <section className="filter-section">
                    <button 
                        className="clear-button"
                        onClick={this.clearFilters}>
                        Clear Filters
                    </button>
                </section>
            </div>
        )
    }
}

const FilterButton = ({ title, callback, active }) => (
    <button className={`filter-button ${title}-button ${active ? 'active-filter-button' : ''}`} onClick={() => callback(title)}>{title}</button>
);
 
export default Filter;