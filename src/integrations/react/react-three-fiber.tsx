/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { useState } from "react";

// inspired by https://codesandbox.io/s/takeshape-article-3-spheres

export const R3FCanvas = qwikify$(() => {
  const [hovering, setHovering] = useState(false);
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[0, -10, 5]} intensity={1} />
      <mesh
        onPointerOver={() => setHovering(true)}
        onPointerOut={() => setHovering(false)}
        scale={hovering ? 2.8 : 2}
      >
        <Sphere visible position={[0, 0, 0]} args={[1, 16, 200]}>
          <MeshDistortMaterial
            color="#00A38D"
            attach="material"
            distort={0.5}
            speed={5}
            roughness={0}
          />
        </Sphere>
      </mesh>
      <mesh
        onPointerOver={() => setHovering(true)}
        onPointerOut={() => setHovering(false)}
        scale={hovering ? 2.3 : 2}
      >
        <Sphere visible position={[0, 0, 0]} args={[1, 16, 200]}>
          <MeshDistortMaterial
            color="#FFA38D"
            attach="material"
            distort={0.6}
            speed={2}
            roughness={0}
          />
        </Sphere>
      </mesh>
      <mesh
        onPointerOver={() => setHovering(true)}
        onPointerOut={() => setHovering(false)}
        scale={hovering ? 2.5 : 2}
      >
        <Sphere visible position={[0, 0, 0]} args={[1, 16, 200]}>
          <MeshDistortMaterial
            color="#A3FF8D"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0}
          />
        </Sphere>
      </mesh>
    </Canvas>
  );
});
