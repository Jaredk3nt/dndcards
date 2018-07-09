import React, { Component } from 'react';

import './card.css';

class Card extends Component {
    cardClick = (e) => {
        console.log(e.target);
    }

    render() { 
        const { isSmall, card, count } = this.props;
        return ( 
            <div className="card-wrapper" onClick={this.cardClick}>
                <div className={`card-container ${isSmall ? 'small' : ''}`}>
                    <div className="rarity-banner">
                        <div className={`banner-content ${card.rarity}`}>
                            <img src={require(`../data/${card.type[0]}.svg`)}/>
                        </div>
                    </div>
                    <div className="card-content">
                        <h1>{ card.name.toUpperCase() }</h1>
                        {
                            card.description.split("\n").map(s => (
                                <p key={s}>{ s }</p>
                            ))
                        }
                    </div>
                </div>
                {
                    (count > 0 && count !== undefined) && (
                        <div className="counter-icon">
                            <p>{ count }</p>
                        </div>
                    )
                }
                
            </div> 
        )
    }
}
 
export default Card;