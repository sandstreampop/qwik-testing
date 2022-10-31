import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { R3FCanvas } from "~/integrations/react/react-three-fiber";
import styles from "./qweact.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const show3d = useSignal(false);

  return (
    <>
      <div id="canvas-container">
        <h1>qweact-three-fiber</h1>
        {show3d.value && <R3FCanvas client:visible></R3FCanvas>}
      </div>
      <button onClick$={() => (show3d.value = true)}>lazy load 3D</button>
    </>
  );
});

export const head: DocumentHead = {
  title: "qweact-three-fiber",
};
