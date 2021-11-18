import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import PokemonsContainer from './components/PokemonsContainer';
import DetailedPokemon from './components/DetailedPokemon';

function App() {
  return (
    <div className="App">
      <Router>

        <Nav />
        <Routes>
          <Route exact path="/" element={<PokemonsContainer />} />

          <Route exact path="/details/:name" element={<DetailedPokemon />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
