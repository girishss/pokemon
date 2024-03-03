import { useEffect, useState } from "react";
import PokemonCard from "./Components/PokemonCard";
import "./App.css";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  const [count, setCount] = useState(1);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon:", error);
      });
  }, [count]);

  const handleFetchNext = () => {
    setCount(count + 1);
  };

  const handleFetchPrevious = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <PokemonCard
        img={pokemonData.sprites?.front_default}
        label={pokemonData.name}
      />
      <div className="buttons-Container">
        {count > 1 ? (
          <button className="button-right" onClick={handleFetchPrevious}>
            Fetch prev
          </button>
        ) : (
          <p></p>
        )}
        <button className="button" onClick={handleFetchNext}>
          Fetch Next
        </button>
      </div>
    </div>
  );
}

export default App;
