import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

export default function DoingNow() {
  return (
    <div className="ongoing">
      <Canvas>
        <ambientLight />
        <pointLight position={[0, 0, 0]} />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="#E1DC59" />
        </mesh>
      </Canvas>
    </div>
  );
}
