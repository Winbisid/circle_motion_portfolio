import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export default function DoingNow() {
  return (
    <div className="ongoing">
      <Canvas
        camera={{ position: [0, 20, 25], fov: 45 }}
        style={{ height: "90%", border: "1px solid brown" }}
      >
        <ambientLight />
        <pointLight position={[0, 0, 0]} />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="#FFD600" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
