import { stringify } from 'json5';
import './App.css';
import DeckGallery from './GameComponents/DeckGallery'
// import Card from './Card'

// import cahCards from './cah-cards-full.json'

// let deconstructDecksObject = Object.entries(cahCards).map(([key, value]) => value)

// let decks = deconstructDecksObject.map(deck => deck)

// let deckList = decks.map(deck => (
//   <Card deck={deck} />
// ))


function App() {
  return (
    <div className="App">
      <DeckGallery />
    </div>
  );
}

export default App;
