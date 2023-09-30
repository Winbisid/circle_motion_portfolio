import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export default function DoingNow() {
  return (
    <div className="ongoing">
      <Canvas>
        <ambientLight />
        <pointLight position={[0, 0, 0]} />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="#FFD600" />
        </mesh>
      </Canvas>
    </div>
  );
}
