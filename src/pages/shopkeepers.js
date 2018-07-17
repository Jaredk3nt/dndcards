import React, { Component } from 'react';
import Link from 'gatsby-link';
import { gatherArrayFromEdges } from '../utils';

import '../layouts/index.css';

class ShopKeepers extends Component {
    state = {  }
    render() { 
        const { data } = this.props;
        const shopkeepers = gatherArrayFromEdges(data.allDataJson.edges, "shopkeepers");
        return ( 
            <div className="shopkeeper-list">
                {
                    shopkeepers.map(sk => (
                        <ShopkeepCard shopkeeper={sk} key={sk.name} />
                    ))
                }
            </div>
        );
    }
}

const ShopkeepCard = ({ shopkeeper }) => {
    const { name, city } = shopkeeper;

    const nameToLink = () => {
        let link = name.toLowerCase();
        link = link.split(" ").join("-");
        return `/shopkeepers/${link}`;
    }

    return (
        <Link to={nameToLink()} className="shopkeep-card">
            <div className="shopkeep-card-text">
                <h3>{ city }</h3>
                <h1>{ name }</h1>
            </div>
        </Link>
    )
}
 
export default ShopKeepers;

export const query = graphql`
    query shopkeepersQuery {
        allDataJson {
            edges {
                node {
                    shopkeepers {
                        name
                        city
                    }
                }
            }
        }
    }
`