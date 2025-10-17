import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Link } from "react-router-dom";

function AppleModel({ path }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={2} />;
}

export default function Stage0() {
  const info = {
    title: "Stage 0: Healthy Apple",
    disease: "No visible disease symptoms.",
    desc: "The apple is fresh, smooth, and healthy.",
    tip: "Maintain proper irrigation and pruning to keep trees healthy.",
    video: "https://www.youtube.com/embed/example", // optional
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-green-50 py-6 px-4 gap-6">
      <h1 className="text-2xl font-bold text-green-700 mb-4">{info.title}</h1>

      <div className="w-full h-[300px] max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[3, 3, 3]} />
          <Suspense >
            <AppleModel path="/models/apples0.glb" />
          </Suspense>
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-md max-w-md w-full text-center">
        <p className="font-semibold text-gray-700 mb-2">Disease:</p>
        <p className="text-gray-600 mb-2">{info.disease}</p>
        <p className="text-gray-600 mb-2">{info.desc}</p>
        <p className="text-green-700 font-medium">💡 {info.tip}</p>
      </div>

      {info.video && (
        <div className="w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-md">
          <iframe
            className="w-full h-full"
            src={info.video}
            title="Stage Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <Link
        to="/apple-visualizer"
        className="mt-4 text-green-700 font-semibold underline"
      >
        ← Back to Stage Map
      </Link>
    </div>
  );
}
