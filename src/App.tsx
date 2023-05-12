import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import "./styles.css";

interface ModelRenderProps {
  url: string;
}

function ModelRender({ url }: ModelRenderProps) {
  const geom = useLoader(STLLoader, url);
  console.log(geom);
  return (
    <mesh geometry={geom}>
      <meshPhongMaterial color="black" />
    </mesh>
  );
}

export default function App() {
  return (
    <div className="App">
      <Canvas
        style={{ height: "400px" }}
        camera={{ position: [450, 650, 20], fov: 30 }}
      >
        <Suspense fallback={"loading..."}>
          {/* This will render model.stl file, if you want to render any other model do write /filename.stl in place of url make sure file is in public folder */}
          <ModelRender url="/model.stl" />
        </Suspense>
        <OrbitControls panSpeed={0.5} rotateSpeed={0.4} />
        <spotLight
          intensity={1.5}
          angle={0.1}
          penumbra={1}
          position={[450, 350, 20]}
        />
        <spotLight
          intensity={1.5}
          angle={2.5}
          penumbra={1}
          position={[250, 150, 40]}
        />
      </Canvas>
    </div>
  );
}
