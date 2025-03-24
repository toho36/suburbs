'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const INITIAL_CAMERA_POSITION = [1.5, 1, 1.4] as const;

export function InteractiveSkateboard() {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <Canvas
        className="min-h-[60rem] w-full"
        camera={{ position: INITIAL_CAMERA_POSITION, fov: 55 }}
      >
        <Suspense>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Scene() {
  return (
    <group>
      <pointLight position={[1, 1, 1]} />
      <mesh>
        <meshStandardMaterial />
        <boxGeometry />
      </mesh>
    </group>
  );
}
