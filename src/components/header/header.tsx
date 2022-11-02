import { component$, useStyles$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <header>
      <div class="logo">
        <a href="https://qwik.builder.io/" target="_blank">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li>
          <a href="/">Start</a>
        </li>
        <li>
          <a href="/pokemons/0">Pokemons</a>
        </li>
      </ul>
    </header>
  );
});
