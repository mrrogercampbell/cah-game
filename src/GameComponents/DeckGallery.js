import React from 'react';
import Card from './Card'
import Deck from './Deck'
import cahCards from '../data/cah-cards-full.json'



let deconstructDecksObject = Object.entries(cahCards).map(([key, value]) => value)

let decks = deconstructDecksObject.map(deck => deck)

let deckList = decks.map((deck, i) => (
    <Deck deckData={deck} key={i} />
))



const DeckGallery = () => {
    return (
        <div>
            {deckList}
        </div>
    );
};

export default DeckGallery;