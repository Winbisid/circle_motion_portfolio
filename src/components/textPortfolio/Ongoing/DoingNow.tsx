import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import planetData from "./planetData";
import * as THREE from "three";

export default function DoingNow() {
  return (
    <div className="ongoing">
      {/* <Canvas
        camera={{ position: [0, 20, 25], fov: 45 }}
        style={{ height: "90%", maxHeight: "100px", border: "1px solid brown" }}
      >
        <Sun />
        {planetData.map((planet) => (
          <Planet planet={planet} key={planet.id} />
        ))}
        <Lights />
        <OrbitControls />
      </Canvas> */}

      {/* //links */}

      {/* https://medium.com/geekculture/build-3d-apps-with-react-animated-solar-system-part-1-c4c394a8574c */}
      {/* https://codesandbox.io/s/animated-solarsystem-with-react-three-fiber-9y0dm?from-embed=&file=/src/App.js:155-194 */}
      {/* https://www.w3schools.com/tags/att_iframe_srcdoc.asp */}
      <iframe src={"https://example.com"} title="iframe example"></iframe>
      <iframe
        srcDoc={"<Sun />"}
        // src="DoingNow.tsx"
        title="iframe example"
      ></iframe>
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

function Planet({ planet: { color, xRadius, zRadius, size } }) {
  return (
    <>
      <mesh position={[xRadius, 0, 0]}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Ecliptic xRadius={xRadius} zRadius={zRadius} />
    </>
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

function Ecliptic({ xRadius = 1, zRadius = 1 }) {
  const points = [];
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }

  points.push(points[0]);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
    </line>
  );
}
