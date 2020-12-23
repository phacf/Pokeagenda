import axios from "axios";
import { getPokemon } from "./actions";

export const getPokemonThunk = (id, setId) => (dispatch) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => {
      setId(res.data.id)
      dispatch(getPokemon(res.data));
    })
    .catch((err) => {
      console.error(err);
    });
};
