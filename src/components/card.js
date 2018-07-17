import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './card.css';

class Card extends Component {
    parseDescription = (d) => {
        return d.split("\n").map(s => (
            <span key={s}>
                { this.destarString(s) }
                <br></br>
            </span>
        ));
    }

    destarString = (str) => {
        let strs = [];
        let currentStr = { isPre: false, str: "" };
        for (let letter of str) {
            if (letter === "`") {
                if (currentStr.isPre) {
                    strs.push(currentStr);
                    currentStr = { isPre: false, str: "" };
                } else {
                    if (currentStr.str.length) {
                        strs.push(currentStr);
                        currentStr = { isPre: true, str: "" };
                    }
                }
            } else {
                currentStr.str += letter;
            }
        }
        if (currentStr.str.length) {
            strs.push(currentStr);
        }
        return strs.map(str => {
            if (str.isPre) {
                return (<pre key={str.str}>{str.str}</pre>);
            } else {
                return (<p key={str.str}>{str.str}</p>);
            }
        });
    }

    render() { 
        const { isSmall, card, count, cardCallback } = this.props;
        return ( 
            <div className="card-wrapper" onClick={() => cardCallback(card)}>
                <div className={`card-container ${isSmall ? 'small' : ''}`}>
                    <div className="rarity-banner">
                        <div className={`banner-content ${card.rarity}`}>
                            <img src={require(`../data/${card.type[0]}.svg`)}/>
                        </div>
                    </div>
                    <div className="card-content">
                        <h1>{ card.name.toUpperCase() }</h1>
                        {
                            this.parseDescription(card.description)
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

Card.propTypes = {

}

Card.defaultProps = {
    cardCallback: () => {}
}
 
export default Card;