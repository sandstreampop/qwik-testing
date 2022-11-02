import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { PokemonData } from "~/routes/pokemons/[offset]";
import styles from "./pokemon.css?inline";

interface PokemonProps {
  name: string;
  sprites: {
    front_default: string;
  };
}

export const Pokemon = component$<PokemonProps>((props) => {
  useStyles$(styles);

  return (
    <div
      class="pokemon-card"
      onClick$={() => alert(`My name is ${props.name}!`)}
    >
      <b>{props.name}</b>
      <img src={props.sprites.front_default} decoding="async" />
      <Link href={`/pokemon/${props.name}`}>More</Link>
    </div>
  );
});

export const PokemonList = component$(
  (props: { pokemonData: PokemonData; filter: string }) => {
    // const store = useStore<{ filteredList: PokemonData }>({ filteredList: [] });

    // useWatch$(({ track }) => {
    //   const pokemonData = track(() => props.pokemonData);
    //   const filter = track(() => props.filter);
    //   store.filteredList = pokemonData.filter(({ name }) =>
    //     name.includes(filter)
    //   );
    // });

    return (
      <PokemonContainer>
        {props.pokemonData.map((pokemon) => (
          <Pokemon {...pokemon} />
        ))}
      </PokemonContainer>
    );
  }
);

export const PokemonContainer = component$(() => {
  return (
    <div class="pokemon-container">
      <Slot />
    </div>
  );
});
