import axios from "axios";
import { getPokemon } from "./actions";

export const getPokemonThunk = (id) => (dispatch) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => {
      console.log(res.data);
      dispatch(getPokemon(res.data));
    })
    .catch((err) => {
      console.error(err);
    });
};
