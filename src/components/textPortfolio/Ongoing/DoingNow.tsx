// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import planetData from "./planetData";
// import * as THREE from "three";
import "./DoingNow.css";

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

//index imports
// import { Logo } from '@pmndrs/branding'
// import { useRoute, useLocation } from "wouter";

//
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Bounds,
  useBounds,
  OrbitControls,
  ContactShadows,
  useGLTF,
  Text,
} from "@react-three/drei";

export default function DoingNow() {
  const [view3D, setView3D] = useState(false);

  const [, params] = useRoute("/item/:id");
  const [, setLocation] = useLocation();

  return (
    <div className="ongoing" id="doing-now" style={{ position: "relative" }}>
      {/* <button onClick={() => setView3D(false)}>hide</button> */}
      {view3D ? (
        <>
          <PortalApp /*setView3D={setView3D}*/ />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            {/* <Logo style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} /> */}
            <a
              style={{
                // position: "absolute",
                // top: 40,
                // left: 40,
                // fontSize: "13px",
                color: "red",
              }}
              href="#doing-now"
              onClick={() => {
                setLocation("/");
                setView3D(false);
                setTimeout(() => {
                  history.replaceState({}, "", "/");
                }, 0);
              }}
            >
              {params ? "< back" : "double click to enter portal"}
            </a>
          </div>
        </>
      ) : (
        // <CanvasView setView3D={setView3D} />
        <div onClick={() => setView3D(true)}>
          <h2>Click to 3D</h2>
        </div>
      )}
    </div>
  );
}

// Canvas with Models

function CanvasView({ setView3D }) {
  return (
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
            {/* integrate Text into 3D model */}
            <Text onClick={() => setView3D(false)}>exit</Text>
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
      // material-color={"green"}
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
      {/* <Text>exit</Text> */}
    </group>
  );
}

// Canvas with portals

import * as THREE from "three";
import { useEffect, useRef } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";
import {
  useCursor,
  MeshPortalMaterial,
  CameraControls,
  Gltf,
} from "@react-three/drei";
import { useRoute, useLocation } from "wouter";
import { easing, geometry } from "maath";
import { suspend } from "suspend-react";

extend(geometry);
// const regular = import("@pmndrs/assets/fonts/inter_regular.woff");
// const medium = import("@pmndrs/assets/fonts/inter_medium.woff");
const regular = import("../../../assets/fonts/Limelight-Regular.ttf");
const medium = import(
  "../../../assets/fonts/SplineSansMono-VariableFont_wght.ttf"
);

export const PortalApp = (/*{ setView3D }*/) => (
  <Canvas
    camera={{ fov: 75, position: [0, 0, 20] }}
    eventSource={document.getElementById("root")}
    eventPrefix="client"
  >
    {/* <color attach="background" args={["#050810"]} /> */}
    <color attach="background" args={["#171e2f"]} />
    {/* <color attach="background" args={["#f0f0f0"]} /> */}
    {/* <Frame
      id="01"
      name={`pick\nles`}
      author="Omar Faruq Tawsif"
      bg="#e4cdac"
      position={[-1.15, 0, 0]}
      rotation={[0, 0.5, 0]}
    >
      <Gltf
        src="pickles_3d_version_of_hyuna_lees_illustration-transformed.glb"
        scale={8}
        position={[0, -0.7, -2]}
      />
    </Frame> */}
    {/* <Frame id="02" name="tea" author="Omar Faruq Tawsif"> */}
    <Frame id="02" name="model" author="" bg="#cf59e6">
      {/* <Gltf src="fiesta_tea-transformed.glb" position={[0, -2, -3]} /> */}
      <Gltf src="/compressed.glb" position={[0, -2, -3]} />
      {/* <CanvasView setView3D={() => console.log("")} /> */}
    </Frame>
    {/* <Frame
      id="03"
      name="still"
      author="Omar Faruq Tawsif"
      bg="#d1d1ca"
      position={[1.15, 0, 0]}
      rotation={[0, -0.5, 0]}
    >
      <Gltf
        src="still_life_based_on_heathers_artwork-transformed.glb"
        scale={2}
        position={[0, -0.8, -4]}
      />
    </Frame> */}
    <Rig />
  </Canvas>
);

function Frame({
  id,
  name,
  author,
  bg,
  width = 1,
  height = 1.61803398875,
  children,
  ...props
}) {
  const portal = useRef();
  const [, setLocation] = useLocation();
  const [, params] = useRoute("/item/:id");
  const [hovered, hover] = useState(false);
  useCursor(hovered);
  useFrame((state, dt) =>
    easing.damp(portal.current, "blend", params?.id === id ? 1 : 0, 0.2, dt)
  );
  return (
    <group {...props}>
      <Text
        font={suspend(medium).default}
        fontSize={0.3}
        anchorY="top"
        anchorX="left"
        lineHeight={0.8}
        position={[-0.375, 0.715, 0.01]}
        material-toneMapped={false}
      >
        {name}
      </Text>
      <Text
        font={suspend(regular).default}
        fontSize={0.1}
        anchorX="right"
        position={[0.4, -0.659, 0.01]}
        material-toneMapped={false}
      >
        /{id}
      </Text>
      <Text
        font={suspend(regular).default}
        fontSize={0.04}
        anchorX="right"
        position={[0.0, -0.677, 0.01]}
        material-toneMapped={false}
      >
        {author}
      </Text>
      <mesh
        name={id}
        onDoubleClick={(e) => (
          e.stopPropagation(), setLocation("/item/" + e.object.name)
        )}
        onPointerOver={(e) => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <roundedPlaneGeometry args={[width, height, 0.1]} />
        <MeshPortalMaterial
          ref={portal}
          events={params?.id === id}
          side={THREE.DoubleSide}
        >
          <color attach="background" args={[bg]} />
          {children}
        </MeshPortalMaterial>
      </mesh>
    </group>
  );
}

function Rig({
  position = new THREE.Vector3(0, 0, 2),
  focus = new THREE.Vector3(0, 0, 0),
}) {
  const { controls, scene } = useThree();
  const [, params] = useRoute("/item/:id");
  useEffect(() => {
    const active = scene.getObjectByName(params?.id);
    if (active) {
      active.parent.localToWorld(position.set(0, 0.5, 0.25));
      active.parent.localToWorld(focus.set(0, 0, -2));
    }
    controls?.setLookAt(...position.toArray(), ...focus.toArray(), true);
  });
  return (
    <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
  );
}

// https://docs.pmnd.rs/react-three-fiber/getting-started/examples
// https://codesandbox.io/s/rz2g0
// https://codesandbox.io/s/btsbj?file=/src/App.js -> for change color on snap(select)
// https://codesandbox.io/s/9m4tpc?file=/src/App.js -> portal
// https://codesandbox.io/s/react-spring-animations-6hi1y?file=/src/Canvas.js -> spring animation could be for exit and enter - need only the scene
