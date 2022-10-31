import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <App></App>;
});

export const head: DocumentHead = {
  title: "Testing Qwik",
};

export const App = component$(() => {
  return <button onClick$={() => console.log("mjau")}>Click Me</button>;
});
