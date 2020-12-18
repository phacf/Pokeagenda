import agenda from "../../images/pokedex1.png";
import ball from "../../images/ball.jpg";
import { Container, PokePhoto, Pdex, Pball, Screen, Button } from "./style";
const Pokedex = ({ pokemon, pokeId, setPokeId }) => {
  return (
    <Container>
      <Pdex src={agenda} />
      <Screen>
        <PokePhoto
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        />

        <Pball src={ball} />
      </Screen>
      
      <button onClick={() => setPokeId(pokeId + 1)}>+</button>
      <button onClick={() => pokeId > 1 && setPokeId(pokeId - 1)}>-</button>
    </Container>
  );
};
export default Pokedex;
