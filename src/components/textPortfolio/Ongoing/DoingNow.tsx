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

function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial color="#FFD600" />
    </mesh>
  );
}

function Planet() {
  return (
    <mesh position={[8, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#78D481" />
    </mesh>
  );
}

function Lights() {
  return (
    <>
      <ambientLight />
      <pointLight position={[0, 0, 0]} />
    </>
  );
}
