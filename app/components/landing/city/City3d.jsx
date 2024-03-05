"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { City } from "./City";

export default function City3d() {
  return (
    <div className="bg-green-300 w-full h-[calc((100vh-16px)/2)] sm:h-[calc(100vh-16px)] sm:w-1/2">
      <Canvas shadows={'soft'}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <City />
        </Suspense>
      </Canvas>
    </div>
  );
}