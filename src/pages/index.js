import React, { Component } from 'react'

import '../index.css';
import CollectionSVG from '../data/collection.svg';
import FamiliarSVG from '../data/familiar.svg';
import ShopkeeperSVG from '../data/shopkeeper.svg';
import AllcardsSVG from '../data/allcards.svg';

class IndexPage extends Component {
  state = {}
  render() {
    const { cardList, filterOpen, filters } = this.state;
    return (
      <div className='home-container'>
        <div className='home-content'>
          <h1>D&D Cards</h1>
          <p>This site is an all-in-one tool for using a homebrew superset of D&D 5e where players collect and use cards instead of learning and casting spells.</p>
          <p>In the left nav you will find a couple of icons leading you to different pages.</p>
          <div className="link-column">
            <LinkRef 
              img={AllcardsSVG}
              title="Full Card List"
              description="Here you will find a complete list of all of the cards avaliable as part of this homebrew."
              />
            <LinkRef 
              img={FamiliarSVG}
              title="Familiar List"
              description="Certain cards can summon familiars, this lists the avaliable ones as part of this homebrew."
              />
            <LinkRef 
              img={CollectionSVG}
              title="Collection"
              description="An interactive and locally saved card collection for players to use in games."
              />
            <LinkRef 
              img={FamiliarSVG}
              title="Shopkeepers"
              description="A set of pre-built shopkeepers."
              />
          </div>
          <h2>Playing a Game</h2>
          <p>D&D Cards plays with the same basic ruleset as D&D 5e to keep things simple. However there are a few changes you will have to make to your campaign in order to make the cards work.</p>

          <h3>Using Cards</h3>
          <p>Cards work very similar to spells in traditional D&D, they are actions which can have attack rolls or skill saves depending on the text. However unlike spells cards do not use spell slots or mana, they are one-time-use items. When a player plays a card it turns to dust and the action takes place.</p>
          <p>The card text is designed to be brief but as specific as possible. If a card does not specify that it has a target it must be used on yourself. If the card does not specify a duration then it only happens once. However, if there is any abiguity in a card then it is entirely up to the DM to decide how the card will be played in the campaign.</p>
          <p>Cards come in a variety or rarities: <span className="simple">Simple</span>, <span className="special">Special</span>, <span className="heroic">Heroic</span>, <span className="legendary">Legendary</span>, and <span className="mythic">Mythic</span>. <span className="simple">Simple</span> cards are extremely common and effects are typically quite... well simple. <span className="simple">Simple</span> cards have an occurance rate of <strong>70%</strong> in packs which should make them abundant amongst your players. While being by far the most common type of card remember when trading and selling that cards of any type should still be quite valuable.<span className="special">Special</span>, <span className="heroic">Heroic</span>, and <span className="legendary">Legendary</span> are each increasingly more rare and powerful. In packs each of these types has an occurance rate of <strong>20%</strong>, <strong>9%</strong>, and <strong>1%</strong> respecively. <span className="mythic">Mythic</span> are different than the other types and should be treated as completely unique. You cannot find these in packs they are only rewarded from the strongest of beasts. For example the card <strong>Dragon's Heart</strong> can only be gained from slaying one of six celestial dragons. After slaying the dragon its spirit is infused into a card that allows you to summon it. Therefore there are six unique versions of this card that could be gained. We highly suggest creating your own <span className="mythic">Mythic</span> cards that fit into your campaign and help to expand the lore of your world.</p>

          <h3>Classes When Using Cards</h3>
          <p>While the idea of collecting cards is fun, the randomness inherant to opening card packs makes classing and role playing a bit more challenging.</p>
          <p>We suggest taking a more casual approach to classing when using this system. Players should decide whether they would rather be a caster or a more traditional melee/ranged fighter. You can then let them pick a few cards to start their collection with. As a DM you can decide to balance the games start however you want but we suggest:</p>
          <ul>
            <li>10x <span className="simple">Simple</span> cards. No more than 3 copies of any one card</li>
            <li>5x <span className="special">Special</span> cards. No more than 1 copies of any one card</li>
            OR
            <li>Each player opens 5 packs and then the players can trade amongst each other.</li>
          </ul>
          <p>The first route allows for a much more traditional experience where a player knows what they want to be. The second route is a much more card game experience where you try to get the best deck for the character you have in mind.</p>
          <p>Certainly you can still use the base classes from D&D and simply remove spells (keeping cantrips can help balance caster types) however we recommend altering the classes to better balance the game.</p>
          <p><strong>(We are working on our suggested class guidelines!)</strong></p>

          <h3>Collecting Cards</h3>
          <p>Like in all good card games one of the best parts for players in collecting the cards themselves. We want to keep the fun and excitement of getting new cards that you get from physical card games so we built a pack opening mechanic into the site.</p>
          <p>As a DM you will have to add in times where the players can earn/find packs. These can include:</p>
          <ul>
            <li>Defeating monsters</li>
            <li>Finding treasure</li>
            <li>Trading or shopping with NPCs</li>
            <li>Leveling up</li>
            <li>Or anything else you come up with..!</li>
          </ul>
          <p>Coming up with lore to help explain why monsters explode into card packs may help your players, but in the end collecting cards is just really fun so don't try worry about having to explain it too much. If you are struggling to come up with a reason why these cards exist in your world here are some simple ideas that may help:</p>
          <ul>
            <li>Magic users are becoming exceedingly rare throughout the world. When an ancient cult of grand wizards realized this fact they worked to create powerful relics that would allow people to continue using magic. However realizing the collective power of the cards they imbued the relics into monsters so that only the righteous could use them.</li>
            <li>The god of games stole magic from his fellow gods and dispersed it to the people of the world as cards.</li>
            <li>The world is actually a part of a video game. (cough...cough... Greed Island)</li>
          </ul>
          <p>Cards are used up after casting so creating lots of opportunities will keep the game feeling fun and full of variety. Being stingy with packs can leave your players scared to use their precious cards, which tends to be less fun for everyone.</p>

          <h3>Trading Cards</h3>
          <p>A vital part of card games and allowing players to create characters of their choosing is trading.</p>
          <p>Trading amongst the party will happen naturally and you should encourage this as a DM. However you should create NPCs that have specific cards and want specific cards or card types that the players can trade with.</p>
          <p>It is good to keep in mind the value of cards when trading or selling cards. 1 <span className="special">Special</span> card is worth approx 3-4 <span className="simple">Simple</span> cards when the trader or seller has no bias placed on any type of card. If a NPC really wants healing cards they may be willing to trade a single <span className="special">Special</span> card for 2 or even 1 <span className="simple">Simple</span> card(s)</p>
        </div>
      </div>
    )
  };
}

const LinkRef = ({ img, title, description }) => (
  <div className="link-ref">
    <div className="link-img">
      <img src={img} />
    </div>
    <div className="link-description">
      <h3>{title}</h3>
      {description}
    </div>
  </div>
);

export default IndexPage;
