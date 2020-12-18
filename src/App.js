import agenda from "./images/pokedex1.png";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonThunk } from "./store/modules/pokemon/thunk";
import { useEffect, useState } from "react";
//

function App() {
  const pokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const [pokeId, setPokeId] = useState(1);
  const fetchData = () => {
    dispatch(getPokemonThunk(pokeId));
  };

  useEffect(() => {
    fetchData();
  }, [pokeId]);

  return (
    <div>
      <img src={agenda} />
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
      />
      <button onClick={()=>setPokeId(pokeId + 1)}>+</button>
      <button onClick={()=> pokeId > 1 && setPokeId(pokeId - 1)}>-</button>
    </div>
  );
}

export default App;
