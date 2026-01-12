import { useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Html } from "@react-three/drei";
import { motion } from "framer-motion";
import "./Showcase.css";

const modeOptions = [
  { id: "room", label: "Studio" },
  { id: "network", label: "Network map" },
] as const;

type ShowcaseMode = (typeof modeOptions)[number]["id"];

export default function Showcase() {
  const [mode, setMode] = useState<ShowcaseMode>("room");

  return (
    <div className="showcase" id="showcase">
      <div className="margin-wrapper showcase__inner">
        <div className="showcase__copy">
          <p className="eyebrow">Interactive showcase</p>
          <h2 className="heading">A cyber lab to explore my work.</h2>
          <p className="showcase__lede">
            Toggle between a compact 3D studio and a live network map. Each
            hotspot opens quick context on what I build and how I work.
          </p>

          <div className="showcase__toggles">
            {modeOptions.map((opt) => (
              <button
                key={opt.id}
                className={`showcase__toggle ${mode === opt.id ? "active" : ""}`}
                onClick={() => setMode(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="showcase__cta">
            <motion.a
              className="cta primary"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              View résumé
            </motion.a>
          </div>
          <p className="showcase__hint">Drag to orbit • Scroll to zoom • Click hotspots</p>
        </div>

        <div className="showcase__panel">
          <div className="showcase__canvas">
            <Canvas camera={{ position: [0, 2.6, 7], fov: 45 }} dpr={[1, 1.8]}>
              <ambientLight intensity={0.35} />
              <pointLight position={[5, 5, 5]} intensity={0.9} />
              <pointLight position={[-6, 3, -4]} intensity={0.6} color="#6bc5f8" />

              {mode === "room" ? <RoomScene /> : <NetworkScene />}

              <OrbitControls enablePan={false} minPolarAngle={0.6} maxPolarAngle={1.45} />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

function RoomScene() {
  return (
    <group>
      <Floor />
      <Desk />
      <Monitor />
      <Rack />
      <GlowOrb position={[-1.6, 1.2, 0.8]} color="#cf59e6" label="Frontend" detail="Motion-rich UI & DX" />
      <GlowOrb position={[1.8, 1.6, -0.3]} color="#6bc5f8" label="Backend" detail="APIs, auth, data" />
      <GlowOrb position={[0.2, 0.9, -2]} color="#f39237" label="Security" detail="Hardening, threat modeling" />
    </group>
  );
}

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
      <planeGeometry args={[18, 12]} />
      <meshStandardMaterial color="#0c101d" roughness={0.9} metalness={0.05} />
    </mesh>
  );
}

function Desk() {
  return (
    <group position={[0, 0.65, 0]}>
      <mesh castShadow position={[0, -0.1, 0]}>
        <boxGeometry args={[3.8, 0.2, 1.4]} />
        <meshStandardMaterial color="#101523" metalness={0.1} roughness={0.4} />
      </mesh>
      <mesh castShadow position={[-1.6, -0.6, 0]}>
        <boxGeometry args={[0.15, 1, 1.1]} />
        <meshStandardMaterial color="#0f1422" roughness={0.5} />
      </mesh>
      <mesh castShadow position={[1.6, -0.6, 0]}>
        <boxGeometry args={[0.15, 1, 1.1]} />
        <meshStandardMaterial color="#0f1422" roughness={0.5} />
      </mesh>
    </group>
  );
}

function Monitor() {
  return (
    <group position={[0, 1.2, 0]}>
      <mesh castShadow position={[0, 0, 0]}>
        <boxGeometry args={[1.8, 1.1, 0.08]} />
        <meshStandardMaterial color="#0d1220" emissive="#0b1d3a" emissiveIntensity={0.35} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0, 0.05]}>
        <planeGeometry args={[1.7, 1]} />
        <meshStandardMaterial
          color="#111827"
          emissive="#46c3f7"
          emissiveIntensity={0.4}
          opacity={0.92}
          transparent
        />
      </mesh>
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.08, 0.12, 0.6, 16]} />
        <meshStandardMaterial color="#0c1322" roughness={0.4} />
      </mesh>
    </group>
  );
}

function Rack() {
  return (
    <group position={[2.8, 1, -1]}>
      <mesh castShadow>
        <boxGeometry args={[0.8, 2, 1]} />
        <meshStandardMaterial color="#0f1626" roughness={0.45} />
      </mesh>
      <mesh position={[0, 0.5, 0.51]}>
        <boxGeometry args={[0.7, 0.25, 0.02]} />
        <meshStandardMaterial color="#cf59e6" emissive="#cf59e6" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[0, 0, 0.51]}>
        <boxGeometry args={[0.7, 0.25, 0.02]} />
        <meshStandardMaterial color="#6bc5f8" emissive="#6bc5f8" emissiveIntensity={0.7} />
      </mesh>
      <mesh position={[0, -0.5, 0.51]}>
        <boxGeometry args={[0.7, 0.25, 0.02]} />
        <meshStandardMaterial color="#f39237" emissive="#f39237" emissiveIntensity={0.7} />
      </mesh>
    </group>
  );
}

function GlowOrb({ position, color, label, detail }: { position: [number, number, number]; color: string; label: string; detail: string }) {
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.5} position={position}>
      <mesh>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} roughness={0.15} />
      </mesh>
      <Html distanceFactor={6} position={[0, 0.55, 0]} center>
        <div
          style={{
            background: "rgba(6,8,14,0.9)",
            border: `1px solid ${color}40`,
            padding: "8px 10px",
            borderRadius: "10px",
            fontSize: "12px",
            color: "#f6f7ff",
            minWidth: "140px",
          }}
        >
          <div style={{ fontWeight: 700 }}>{label}</div>
          <div style={{ opacity: 0.8 }}>{detail}</div>
        </div>
      </Html>
    </Float>
  );
}

function NetworkScene() {
  const nodes = useMemo(
    () => [
      { id: "you", label: "Winbisid", pos: [0, 0.6, 0], color: "#cf59e6" },
      { id: "frontend", label: "UI/Frontend", pos: [1.8, 1.2, -1.4], color: "#6bc5f8" },
      { id: "backend", label: "API/Infra", pos: [-1.9, 1.4, 0.9], color: "#f39237" },
      { id: "security", label: "Security", pos: [1.4, -0.2, 1.8], color: "#f94144" },
      { id: "ops", label: "Ops", pos: [-1.4, -0.3, -1.7], color: "#9effff" },
      { id: "collab", label: "Collab", pos: [0.2, 1.8, 1.4], color: "#9f7aea" },
    ],
    []
  );

  const edges = useMemo(
    () => [
      ["you", "frontend"],
      ["you", "backend"],
      ["you", "security"],
      ["you", "ops"],
      ["you", "collab"],
      ["frontend", "backend"],
      ["backend", "security"],
      ["security", "ops"],
      ["frontend", "collab"],
    ],
    []
  );

  const positions = useMemo(() => {
    const lookup = Object.fromEntries(nodes.map((n) => [n.id, n.pos]));
    const arr = new Float32Array(edges.length * 2 * 3);
    edges.forEach((edge, i) => {
      const a = lookup[edge[0]];
      const b = lookup[edge[1]];
      arr.set(a, i * 6);
      arr.set(b, i * 6 + 3);
    });
    return arr;
  }, [nodes, edges]);

  return (
    <group>
      <NetworkLines positions={positions} />
      {nodes.map((node) => (
        <Float key={node.id} speed={1.5} floatIntensity={0.4} rotationIntensity={0.2}>
          <mesh position={node.pos}>
            <sphereGeometry args={[0.28, 24, 24]} />
            <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={0.8} roughness={0.2} />
          </mesh>
          <Html distanceFactor={8} position={[0, 0.6, 0]} center>
            <div
              style={{
                background: "rgba(7,10,20,0.92)",
                border: "1px solid rgba(255,255,255,0.14)",
                padding: "6px 8px",
                borderRadius: "10px",
                fontSize: "12px",
                color: "#f6f7ff",
              }}
            >
              {node.label}
            </div>
          </Html>
        </Float>
      ))}
    </group>
  );
}

function NetworkLines({ positions }: { positions: Float32Array }) {
  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <lineBasicMaterial color="#6bc5f8" transparent opacity={0.6} linewidth={1} />
    </lineSegments>
  );
}
