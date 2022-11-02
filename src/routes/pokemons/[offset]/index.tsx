import { component$, Resource, useStyles$ } from "@builder.io/qwik";
import {
  DocumentHead,
  Link,
  RequestHandler,
  useEndpoint,
} from "@builder.io/qwik-city";
import { PokemonList } from "~/components/pokemon/pokemon";
import styles from "./pokemons.css?inline";

export type PokemonData = {
  name: string;
  sprites: {
    front_default: string;
  };
}[];

export default component$(() => {
  useStyles$(styles);

  // const store = useStore({ filter: "" });

  const pokemonData = useEndpoint<PokemonData>();
  return (
    <>
      <Link
        class="random-link"
        href={"/pokemons/" + Math.floor(Math.random() * 100)}
      >
        Get random pokemons
      </Link>
      {/* <span>Filter:</span>
      <input
        class="filter-input"
        value={store.filter}
        onInput$={(event) =>
          (store.filter = (event.target as HTMLInputElement).value)
        }
      ></input> */}
      <Resource
        onPending={() => <div>Loading...</div>}
        onResolved={(pokemonData) => (
          <PokemonList pokemonData={pokemonData} filter={""} />
        )}
        value={pokemonData}
      ></Resource>
    </>
  );
});

export const Head: DocumentHead = {
  title: "Pokemons",
};

export const onGet: RequestHandler<PokemonData> = async ({ params }) => {
  return await fetchPokemons(params.offset);
};

async function fetchPokemons(offset: string) {
  const firstFetch = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
  ).then((res) => res.json());

  const secondFetch = await Promise.all(
    firstFetch.results.map(async (result: any) =>
      fetch(result.url).then((res) => res.json())
    )
  );

  const result = secondFetch.map(({ name, sprites: { front_default } }) => ({
    name,
    sprites: { front_default },
  }));

  return result;
}
