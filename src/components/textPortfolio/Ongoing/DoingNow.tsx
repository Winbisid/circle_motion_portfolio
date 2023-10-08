// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import planetData from "./planetData";
// import * as THREE from "three";

// export default function DoingNow() {
//   return (
//     <div className="ongoing">
//       {/* <Canvas
//         camera={{ position: [0, 20, 25], fov: 45 }}
//         style={{ height: "90%", maxHeight: "100px", border: "1px solid brown" }}
//       >
//         <Sun />
//         {planetData.map((planet) => (
//           <Planet planet={planet} key={planet.id} />
//         ))}
//         <Lights />
//         <OrbitControls />
//       </Canvas> */}

//       {/* //links */}

//       {/* https://medium.com/geekculture/build-3d-apps-with-react-animated-solar-system-part-1-c4c394a8574c */}
//       {/* https://codesandbox.io/s/animated-solarsystem-with-react-three-fiber-9y0dm?from-embed=&file=/src/App.js:155-194 */}
//       {/* https://www.w3schools.com/tags/att_iframe_srcdoc.asp */}
//       <iframe src={"https://example.com"} title="iframe example"></iframe>
//       <iframe
//         srcDoc={"<Sun />"}
//         // src="DoingNow.tsx"
//         title="iframe example"
//       ></iframe>
//     </div>
//   );
// }

// function Sun() {
//   return (
//     <mesh>
//       <sphereGeometry args={[2.5, 32, 32]} />
//       <meshStandardMaterial color="#FFD600" />
//     </mesh>
//   );
// }

// function Planet({ planet: { color, xRadius, zRadius, size } }) {
//   return (
//     <>
//       <mesh position={[xRadius, 0, 0]}>
//         <sphereGeometry args={[size, 32, 32]} />
//         <meshStandardMaterial color={color} />
//       </mesh>
//       <Ecliptic xRadius={xRadius} zRadius={zRadius} />
//     </>
//   );
// }

// function Lights() {
//   return (
//     <>
//       <ambientLight />
//       <pointLight position={[0, 0, 0]} />
//     </>
//   );
// }

// function Ecliptic({ xRadius = 1, zRadius = 1 }) {
//   const points = [];
//   for (let index = 0; index < 64; index++) {
//     const angle = (index / 64) * 2 * Math.PI;
//     const x = xRadius * Math.cos(angle);
//     const z = zRadius * Math.sin(angle);
//     points.push(new THREE.Vector3(x, 0, z));
//   }

//   points.push(points[0]);

//   const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
//   return (
//     <line geometry={lineGeometry}>
//       <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
//     </line>
//   );
// }
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Bounds,
  useBounds,
  OrbitControls,
  ContactShadows,
  useGLTF,
} from "@react-three/drei";

export default function DoingNow() {
  return (
    <div className="ongoing">
      <Canvas camera={{ position: [0, -10, 80], fov: 50 }} dpr={[1, 2]}>
        <spotLight
          position={[-100, -100, -100]}
          intensity={0.2}
          angle={0.3}
          penumbra={1}
        />
        <hemisphereLight
          color="white"
          groundColor="#ff0f00"
          position={[-7, 25, 13]}
          intensity={1}
        />
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.2}>
            <SelectToZoom>
              {/* <Model
                name="Curly"
                position={[1, -11, -20]}
                rotation={[2, 0, -0]}
              /> */}
              {/* <Model name="DNA" position={[20, 0, -17]} rotation={[1, 1, -2]} /> */}
              <Model
                name="Headphones"
                position={[20, 2, 4]}
                rotation={[1, 0, -1]}
              />
              <Model
                name="Notebook"
                position={[-21, -15, -13]}
                rotation={[2, 0, 1]}
              />
              <Model
                name="Rocket003"
                position={[18, 15, -25]}
                rotation={[1, 1, 0]}
              />
              {/* <Model
                name="Roundcube001"
                position={[-25, -4, 5]}
                rotation={[1, 0, 0]}
                scale={0.5}
              /> */}
              {/* <Model
                name="Table"
                position={[1, -4, -28]}
                rotation={[1, 0, -1]}
                scale={0.5}
              /> */}
              {/* <Model
                name="VR_Headset"
                position={[7, -15, 28]}
                rotation={[1, 0, -1]}
                scale={5}
              /> */}
              {/* <Model
                name="Zeppelin"
                position={[-20, 10, 10]}
                rotation={[3, -1, 3]}
                scale={0.005}
              /> */}
            </SelectToZoom>
          </Bounds>
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -35, 0]}
            opacity={0.2}
            width={200}
            height={200}
            blur={1}
            far={50}
          />
        </Suspense>
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 1.75}
        />
      </Canvas>
    </div>
  );
}

function Model({ name, ...props }) {
  const { nodes } = useGLTF("/compressed.glb");
  return (
    <mesh
      geometry={nodes[name].geometry}
      material={nodes[name].material}
      material-emissive="red"
      material-roughness={1}
      {...props}
      dispose={null}
    />
  );
}

// This component wraps children in a group with a click handler
// Clicking any object will refresh and fit bounds
function SelectToZoom({ children }) {
  const api = useBounds();
  return (
    <group
      onClick={(e) => (
        e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit()
      )}
      onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}
    >
      {children}
    </group>
  );
}

// https://docs.pmnd.rs/react-three-fiber/getting-started/examples
// https://codesandbox.io/s/rz2g0
// https://codesandbox.io/s/btsbj?file=/src/App.js -> for change color on snap(select)
