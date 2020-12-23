import { useDispatch, useSelector } from "react-redux";
import { getPokemonThunk } from "./store/modules/pokemon/thunk";
import { useEffect, useState } from "react";

import Pokedex from "./components/Pokedex";

function App() {
  const pokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const [pokeId, setPokeId] = useState(1);
  const [searchName, setName] = useState();

  const fetchData = () => {
    dispatch(getPokemonThunk(pokeId, setPokeId));
  };

  useEffect(() => {
    fetchData();
  }, [pokeId]);

  return (
    <div>
      <Pokedex pokemon={pokemon} pokeId={pokeId} setPokeId={setPokeId} fetch={fetchData} />
    </div>
  );
}

export default App;
