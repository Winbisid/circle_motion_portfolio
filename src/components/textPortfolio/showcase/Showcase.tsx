import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Html } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
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
              href="/resume"
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
              <color attach="background" args={["#0b0a14"]} />
              <fog attach="fog" args={["#0b0a14", 12, 36]} />

              <Lights />
              <WarpBackdrop />

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
      <MonitorSetup />
      <Keyboard />
      <MacbookStand />
      <Rack />
      <RaspberryCluster />
      <CloudNode position={[0, 4.6, -0.1]} />
      <GlowOrb position={[-0.8, 3.4, 0.5]} color="#cf59e6" label="Frontend" detail="Motion-rich UI & DX" />
      <GlowOrb position={[0.8, 3.4, 0.2]} color="#6bc5f8" label="Backend" detail="APIs, auth, data" />
      <GlowOrb position={[0, 3.1, -0.8]} color="#f39237" label="Security" detail="Hardening, threat modeling" />
    </group>
  );
}

function Lights() {
  return (
    <group>
      <hemisphereLight intensity={0.75} color="#caa94a" groundColor="#0a0a12" />
      <ambientLight intensity={0.65} />
      <spotLight
        position={[4, 6.5, 5.5]}
        angle={0.7}
        penumbra={0.78}
        intensity={2.4}
        color="#caa94a"
        castShadow
      />
      <spotLight
        position={[-3.5, 5, -3]}
        angle={0.55}
        penumbra={0.6}
        intensity={1.75}
        color="#7a51e2"
      />
      <pointLight position={[-6, 4, -4]} intensity={1.35} color="#7a51e2" />
      <pointLight position={[0, 3.2, 3]} intensity={1.4} color="#6bc5f8" />
      <pointLight position={[0.6, 1.3, 1.8]} intensity={1.9} color="#caa94a" decay={2} distance={12} />
      <pointLight position={[-0.6, 1.3, -1.6]} intensity={1.7} color="#6bc5f8" decay={2} distance={12} />
      <pointLight position={[0, 2.2, -1.2]} intensity={1.6} color="#6bc5f8" decay={2} distance={11} />
      <directionalLight position={[0, 5, 0]} intensity={0.72} color="#d7c48a" />
      <directionalLight position={[2, 4, -2]} intensity={0.6} color="#9bc7ff" />
    </group>
  );
}

function CloudNode({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <group scale={1.2} position={[0, 0, 0]}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.6, 24, 24]} />
          <meshStandardMaterial color="#ecf2ff" emissive="#cfe1ff" emissiveIntensity={0.25} roughness={0.4} metalness={0.08} />
        </mesh>
        <mesh position={[0.55, -0.1, -0.15]}>
          <sphereGeometry args={[0.45, 22, 22]} />
          <meshStandardMaterial color="#ecf2ff" emissive="#cfe1ff" emissiveIntensity={0.22} roughness={0.42} metalness={0.08} />
        </mesh>
        <mesh position={[-0.6, -0.05, 0.1]}>
          <sphereGeometry args={[0.42, 22, 22]} />
          <meshStandardMaterial color="#ecf2ff" emissive="#cfe1ff" emissiveIntensity={0.22} roughness={0.42} metalness={0.08} />
        </mesh>
        <mesh position={[0.15, -0.35, 0.05]}>
          <boxGeometry args={[1.3, 0.32, 0.55]} />
          <meshStandardMaterial color="#dce8ff" emissive="#cfe1ff" emissiveIntensity={0.18} roughness={0.46} metalness={0.05} />
        </mesh>
      </group>

      <group position={[0, 0.35, 0]} scale={[0.35, 0.35, 0.35]}>
        <mesh castShadow position={[0, 0.08, 0]}>
          <boxGeometry args={[1.4, 0.4, 1]} />
          <meshStandardMaterial color="#0e172a" roughness={0.38} metalness={0.22} />
        </mesh>
        <mesh position={[0, 0.5, 0.18]}>
          <boxGeometry args={[1.5, 0.9, 0.08]} />
          <meshStandardMaterial color="#0d1525" emissive="#5cc8ff" emissiveIntensity={1.5} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.5, 0.21]}>
          <planeGeometry args={[1.35, 0.8]} />
          <meshStandardMaterial color="#0b1220" emissive="#aee8ff" emissiveIntensity={1.15} transparent opacity={0.92} />
        </mesh>
        <mesh position={[0, -0.22, 0]}>
          <boxGeometry args={[1.6, 0.12, 1.1]} />
          <meshStandardMaterial color="#101826" roughness={0.4} metalness={0.18} />
        </mesh>
      </group>

      <Html distanceFactor={12} position={[0, 1.2, 0]} center>
        <div
          style={{
            background: "rgba(6,8,14,0.72)",
            border: "1px solid rgba(255,255,255,0.14)",
            padding: "4px 9px",
            borderRadius: "10px",
            fontSize: "11px",
            color: "#f6f7ff",
            boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
            minWidth: "130px",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: 800, letterSpacing: "0.02em", textTransform: "capitalize" }}>Cloud</div>
          <div style={{ opacity: 0.82, marginTop: 2 }}>Azure + Honeypot</div>
        </div>
      </Html>
    </group>
  );
}

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
      <planeGeometry args={[18, 12]} />
      <meshStandardMaterial color="#3a5080" roughness={0.6} metalness={0.26} emissive="#1a2240" emissiveIntensity={0.16} />
    </mesh>
  );
}

function Desk() {
  return (
    <group position={[0, 0.65, 0]}>
      <mesh castShadow position={[0, -0.1, 0]}>
        <boxGeometry args={[3.8, 0.2, 1.4]} />
        <meshStandardMaterial color="#46639c" metalness={0.32} roughness={0.2} emissive="#1f2d4f" emissiveIntensity={0.18} />
      </mesh>
      <mesh castShadow position={[-1.6, -0.6, 0]}>
        <boxGeometry args={[0.15, 1, 1.1]} />
        <meshStandardMaterial color="#3c5789" roughness={0.3} metalness={0.22} emissive="#1d2944" emissiveIntensity={0.12} />
      </mesh>
      <mesh castShadow position={[1.6, -0.6, 0]}>
        <boxGeometry args={[0.15, 1, 1.1]} />
        <meshStandardMaterial color="#3c5789" roughness={0.3} metalness={0.22} emissive="#1d2944" emissiveIntensity={0.12} />
      </mesh>
    </group>
  );
}

function Keyboard() {
  return (
    <group position={[0, 0.67, 0.42]}>
      <mesh castShadow>
        <boxGeometry args={[1.05, 0.04, 0.34]} />
        <meshStandardMaterial color="#121a2a" metalness={0.2} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.022, 0]}>
        <boxGeometry args={[1.0, 0.01, 0.3]} />
        <meshStandardMaterial color="#1b2740" roughness={0.35} />
      </mesh>
      <mesh position={[0, 0.03, 0.06]}>
        <boxGeometry args={[0.9, 0.006, 0.08]} />
        <meshStandardMaterial color="#0f1628" roughness={0.3} />
      </mesh>
    </group>
  );
}

function MacbookStand() {
  return (
    <group position={[1.05, 0.7, -0.08]} rotation={[0, -0.35, 0]}>
      <mesh castShadow position={[0, -0.035, 0]}>
        <boxGeometry args={[0.36, 0.06, 0.22]} />
        <meshStandardMaterial color="#101827" metalness={0.3} roughness={0.45} />
      </mesh>
      <mesh castShadow position={[0, 0.17, 0]}>
        <boxGeometry args={[0.5, 0.38, 0.034]} />
        <meshStandardMaterial color="#0d1321" metalness={0.35} roughness={0.38} />
      </mesh>
      <mesh castShadow position={[0, 0.17, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.4, 0.02, 0.6]} />
        <meshStandardMaterial color="#c2c8d0" metalness={0.6} roughness={0.25} />
      </mesh>
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[0.03, 0.03, 0.42]} />
        <meshStandardMaterial color="#8aa0b8" metalness={0.5} roughness={0.3} />
      </mesh>

      <Html distanceFactor={8} position={[0.05, 0.62, 0.2]} center>
        <div
          style={{
            background: "rgba(6,8,14,0.78)",
            border: "1px solid rgba(255,255,255,0.14)",
            padding: "4px 8px",
            borderRadius: "10px",
            fontSize: "11px",
            color: "#f6f7ff",
            boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
            minWidth: "120px",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: 800, letterSpacing: "0.02em", textTransform: "capitalize" }}>Mobile</div>
          <div style={{ opacity: 0.82, marginTop: 2 }}>macOS + Raycast + VS Code</div>
        </div>
      </Html>
    </group>
  );
}

function MonitorSetup() {
  return (
    <group position={[0, 1.32, -0.05]}>
      <MainMonitor />
      <PortraitMonitor />
      <Html distanceFactor={8} position={[0, 1.05, 0.1]} center>
        <div
          style={{
            background: "rgba(6,8,14,0.78)",
            border: "1px solid rgba(255,255,255,0.14)",
            padding: "6px 10px",
            borderRadius: "10px",
            fontSize: "11px",
            color: "#f6f7ff",
            boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
            minWidth: "150px",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: 800, letterSpacing: "0.02em", textTransform: "capitalize" }}>Windows</div>
          <div style={{ opacity: 0.82, marginTop: 2 }}>Windows + WSL + Obsidian</div>
        </div>
      </Html>
    </group>
  );
}

function MainMonitor() {
  return (
    <group>
      <mesh castShadow position={[0, 0, 0]}>
        <boxGeometry args={[1.8, 1.1, 0.08]} />
        <meshStandardMaterial color="#101a30" emissive="#1f4c8f" emissiveIntensity={0.95} roughness={0.28} />
      </mesh>
      <mesh position={[0, 0, 0.05]}>
        <planeGeometry args={[1.7, 1]} />
        <meshStandardMaterial
          color="#111827"
          emissive="#7ee4ff"
          emissiveIntensity={1.3}
          opacity={0.96}
          transparent
        />
      </mesh>
      <mesh position={[0, -0.58, -0.06]}>
        <cylinderGeometry args={[0.05, 0.08, 0.22, 16]} />
        <meshStandardMaterial color="#0c1322" roughness={0.4} />
      </mesh>
      <mesh position={[0, -0.74, -0.06]}>
        <cylinderGeometry args={[0.14, 0.14, 0.04, 20]} />
        <meshStandardMaterial color="#0b101d" roughness={0.46} />
      </mesh>
    </group>
  );
}

function PortraitMonitor() {
  return (
    <group position={[-1.35, 0.08, -0.02]} rotation={[0, 0.12, 0]}>
      <mesh castShadow position={[0, 0, 0]}>
        <boxGeometry args={[0.9, 1.35, 0.07]} />
        <meshStandardMaterial color="#0f1830" emissive="#21457f" emissiveIntensity={0.9} roughness={0.28} />
      </mesh>
      <mesh position={[0, 0, 0.045]}>
        <planeGeometry args={[0.82, 1.25]} />
        <meshStandardMaterial
          color="#0f1729"
          emissive="#6cd2ff"
          emissiveIntensity={1.1}
          opacity={0.95}
          transparent
        />
      </mesh>
      <mesh position={[0, -0.6325, -0.055]}>
        <cylinderGeometry args={[0.04, 0.075, 0.2, 14]} />
        <meshStandardMaterial color="#0c1322" roughness={0.42} />
      </mesh>
      <mesh position={[0, -0.75, -0.1]}>
        <boxGeometry args={[0.58, 0.035, 0.32]} />
        <meshStandardMaterial color="#0f1422" roughness={0.45} />
      </mesh>
    </group>
  );
}

function Rack() {
  return (
    <group position={[2.8, 1, -1]}>
      <mesh castShadow>
        <boxGeometry args={[0.8, 2, 1]} />
        <meshStandardMaterial color="#15203a" roughness={0.4} metalness={0.12} />
      </mesh>
      <mesh position={[0, 0.5, 0.51]}>
        <boxGeometry args={[0.7, 0.25, 0.02]} />
        <meshStandardMaterial color="#cf59e6" emissive="#cf59e6" emissiveIntensity={1.35} />
      </mesh>
      <mesh position={[0, 0, 0.51]}>
        <boxGeometry args={[0.7, 0.25, 0.02]} />
        <meshStandardMaterial color="#6bc5f8" emissive="#6bc5f8" emissiveIntensity={1.2} />
      </mesh>
      <mesh position={[0, -0.5, 0.51]}>
        <boxGeometry args={[0.7, 0.25, 0.02]} />
        <meshStandardMaterial color="#f39237" emissive="#f39237" emissiveIntensity={1.2} />
      </mesh>

      <Html distanceFactor={10} position={[0, 1.25, 0.65]} center>
        <div
          style={{
            background: "rgba(6,8,14,0.78)",
            border: "1px solid rgba(255,255,255,0.14)",
            padding: "6px 10px",
            borderRadius: "10px",
            fontSize: "11px",
            color: "#f6f7ff",
            boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
            minWidth: "130px",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: 800, letterSpacing: "0.02em", textTransform: "capitalize" }}>Rack</div>
          <div style={{ opacity: 0.82, marginTop: 2 }}>Windows Server + AD + Splunk + PowerShell</div>
        </div>
      </Html>
    </group>
  );
}

function RaspberryCluster() {
  const blinkRefs = useRef<THREE.MeshStandardMaterial[]>([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    blinkRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const speed = 1.2 + i * 0.22;
      mesh.emissiveIntensity = 0.5 + Math.abs(Math.sin(t * speed + i)) * 1.4;
    });
  });

  return (
    <group position={[-2.6, 0.08, -1.2]}>
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[1.2, 0.08, 1]} />
        <meshStandardMaterial color="#1a2238" metalness={0.12} roughness={0.4} />
      </mesh>

      {[0, 1, 2, 3].map((i) => (
        <group key={i} position={[0, 0.08 + i * 0.15, 0]}>
          <mesh>
            <boxGeometry args={[1.05, 0.13, 0.85]} />
            <meshStandardMaterial color="#0f172a" metalness={0.24} roughness={0.32} />
          </mesh>
          <mesh position={[-0.42, 0, 0.22]}>
            <boxGeometry args={[0.08, 0.04, 0.18]} />
            <meshStandardMaterial color="#131c30" metalness={0.3} roughness={0.25} />
          </mesh>
          <mesh position={[-0.42, 0, -0.22]}>
            <boxGeometry args={[0.08, 0.04, 0.18]} />
            <meshStandardMaterial color="#131c30" metalness={0.3} roughness={0.25} />
          </mesh>
          <mesh position={[0.42, 0, 0.18]}>
            <boxGeometry args={[0.05, 0.05, 0.05]} />
            <meshStandardMaterial
              ref={(ref) => ref && (blinkRefs.current[0 + i * 3] = ref)}
              color="#6bc5f8"
              emissive="#6bc5f8"
              emissiveIntensity={1.15}
            />
          </mesh>
          <mesh position={[0.42, 0, -0.18]}>
            <boxGeometry args={[0.05, 0.05, 0.05]} />
            <meshStandardMaterial
              ref={(ref) => ref && (blinkRefs.current[1 + i * 3] = ref)}
              color="#cf59e6"
              emissive="#cf59e6"
              emissiveIntensity={1.15}
            />
          </mesh>
          <mesh position={[0.28, 0, 0]}>
            <boxGeometry args={[0.05, 0.05, 0.05]} />
            <meshStandardMaterial
              ref={(ref) => ref && (blinkRefs.current[2 + i * 3] = ref)}
              color="#f39237"
              emissive="#f39237"
              emissiveIntensity={1.15}
            />
          </mesh>
        </group>
      ))}

      <Html distanceFactor={8} position={[0, 1.05, 0]} center>
        <div
          style={{
            background: "rgba(6,8,14,0.78)",
            border: "1px solid rgba(255,255,255,0.14)",
            padding: "4px 8px",
            borderRadius: "10px",
            fontSize: "11px",
            color: "#f6f7ff",
            boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
            minWidth: "140px",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: 800, letterSpacing: "0.02em", textTransform: "capitalize" }}>
            Pi cluster
          </div>
          <div style={{ opacity: 0.82, marginTop: 1 }}>linux + k8s + nginx + zerotier + wg + RAID NAS + Samba</div>
        </div>
      </Html>

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
    </Float>
  );
}

function NetworkScene() {
  type NodeDef = { id: string; label: string; color: string; size?: number; children?: string[] };

  const graph: Record<string, NodeDef> = useMemo(
    () => ({
      you: {
        id: "you",
        label: "Winbisid",
        color: "#cf59e6",
        size: 1.5,
        children: ["stack", "apps", "experience", "hobbies", "collab"],
      },
      stack: { id: "stack", label: "Core stack", color: "#6bc5f8", size: 1.18, children: ["frontend", "backend", "cloud", "security", "data"] },
      frontend: { id: "frontend", label: "UI / Frontend", color: "#6bc5f8" },
      backend: { id: "backend", label: "API / Infra", color: "#f39237" },
      cloud: { id: "cloud", label: "Cloud & Ops", color: "#9effff" },
      security: { id: "security", label: "Security", color: "#f94144" },
      data: { id: "data", label: "Data & Observability", color: "#f1c40f" },
      apps: {
        id: "apps",
        label: "Apps & Workflow",
        color: "#9f7aea",
        size: 1.1,
        children: ["vscode", "raycast", "obsidian", "gha", "docker"],
      },
      vscode: { id: "vscode", label: "VS Code", color: "#4cc9f0" },
      raycast: { id: "raycast", label: "Raycast", color: "#f72585" },
      obsidian: { id: "obsidian", label: "Obsidian", color: "#7c7cff" },
      gha: { id: "gha", label: "GitHub Actions", color: "#6bc5f8" },
      docker: { id: "docker", label: "Docker", color: "#00b4d8" },
      experience: {
        id: "experience",
        label: "Experience",
        color: "#2dd4bf",
        size: 1.08,
        children: ["freelance", "startup", "enterprise", "domains"],
      },
      freelance: { id: "freelance", label: "Freelance / Consulting", color: "#34d399" },
      startup: { id: "startup", label: "Startups", color: "#22c55e" },
      enterprise: { id: "enterprise", label: "Enterprise", color: "#0ea5e9" },
      domains: { id: "domains", label: "Fintech • Logistics • Edtech", color: "#14b8a6" },
      hobbies: {
        id: "hobbies",
        label: "Hobbies & Lab",
        color: "#f59e0b",
        size: 1.08,
        children: ["homelab", "graphics", "audio", "writing"],
      },
      homelab: { id: "homelab", label: "Pi cluster + RAID NAS", color: "#fbbf24" },
      graphics: { id: "graphics", label: "3D / shaders", color: "#f97316" },
      audio: { id: "audio", label: "Audio & music", color: "#fb7185" },
      writing: { id: "writing", label: "Docs & notes", color: "#eab308" },
      collab: {
        id: "collab",
        label: "Collaboration",
        color: "#7dd3fc",
        size: 1.05,
        children: ["mentoring", "pairing", "docs", "async"],
      },
      mentoring: { id: "mentoring", label: "Mentoring", color: "#38bdf8" },
      pairing: { id: "pairing", label: "Pairing", color: "#0ea5e9" },
      docs: { id: "docs", label: "Docs-first", color: "#22d3ee" },
      async: { id: "async", label: "Async comms", color: "#67e8f9" },
    }),
    []
  );

  const rootId = "you";
  const [activeParent, setActiveParent] = useState<string | null>(null);

  const visibleNodes = useMemo(() => {
    if (!activeParent) {
      const firstLayer = graph[rootId].children ?? [];
      return [graph[rootId], ...firstLayer.map((id) => graph[id])];
    }
    const kids = graph[activeParent].children ?? [];
    return [graph[activeParent], ...kids.map((id) => graph[id])];
  }, [activeParent, graph]);

  const visibleEdges = useMemo(() => {
    if (!activeParent) {
      return (graph[rootId].children ?? []).map((child) => [rootId, child] as const);
    }
    return (graph[activeParent].children ?? []).map((child) => [activeParent, child] as const);
  }, [activeParent, graph]);

  const layoutPositions = useMemo(() => {
    const coords: Record<string, [number, number, number]> = {};

    if (!activeParent) {
      coords[rootId] = [0, 1, 0];
      const children = graph[rootId].children ?? [];
      const radius = 2.8;
      children.forEach((id, idx) => {
        const angle = (idx / Math.max(children.length, 1)) * Math.PI * 2;
        coords[id] = [Math.cos(angle) * radius, 1 + Math.sin(angle * 0.5) * 0.12, Math.sin(angle) * radius];
      });
    } else {
      coords[activeParent] = [0, 1, 0];
      const children = graph[activeParent].children ?? [];
      const radius = 2.35;
      children.forEach((id, idx) => {
        const angle = ((idx + 0.15) / Math.max(children.length, 1)) * Math.PI * 2;
        coords[id] = [Math.cos(angle) * radius, 1 + Math.sin(angle * 0.4) * 0.12, Math.sin(angle) * radius];
      });
    }

    return coords;
  }, [activeParent, graph]);

  const positions = useMemo(() => new Float32Array(visibleEdges.length * 2 * 3), [visibleEdges.length]);
  const nodeRefs = useRef<Record<string, THREE.Object3D | null>>({});
  const lineAttr = useRef<THREE.BufferAttribute | null>(null);
  const tmpA = useMemo(() => new THREE.Vector3(), []);
  const tmpB = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    visibleNodes.forEach((node, idx) => {
      const ref = nodeRefs.current[node.id];
      if (!ref) return;
      const base = layoutPositions[node.id] ?? [0, 0, 0];
      const phase = idx * 0.6 + 1.2;
      const bob = Math.sin(t * 1.2 + phase) * 0.08;
      const wobbleX = Math.sin(t * 0.6 + phase) * 0.05;
      const wobbleZ = Math.cos(t * 0.8 + phase) * 0.05;
      ref.position.set(base[0] + wobbleX, base[1] + bob, base[2] + wobbleZ);
    });

    if (!lineAttr.current) return;
    const arr = lineAttr.current.array as Float32Array;

    visibleEdges.forEach((edge, i) => {
      const a = nodeRefs.current[edge[0]];
      const b = nodeRefs.current[edge[1]];
      if (!a || !b) return;
      tmpA.copy(a.position);
      tmpB.copy(b.position);
      arr.set(tmpA.toArray(), i * 6);
      arr.set(tmpB.toArray(), i * 6 + 3);
    });

    lineAttr.current.needsUpdate = true;
  });

  return (
    <group onPointerMissed={() => setActiveParent(null)}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            ref={lineAttr}
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#6bc5f8" transparent opacity={0.6} linewidth={1} />
      </lineSegments>

      {visibleNodes.map((node) => {
        const hasChildren = (node.children ?? []).length > 0;
        const isActive = activeParent === node.id;
        const baseScale = node.size ?? 1;

        return (
          <group
            key={node.id}
            ref={(ref) => {
              if (ref) nodeRefs.current[node.id] = ref;
              else delete nodeRefs.current[node.id];
            }}
            position={layoutPositions[node.id] ?? [0, 0, 0]}
            onClick={(e) => {
              e.stopPropagation();
              if (hasChildren) {
                setActiveParent((prev) => (prev === node.id ? null : node.id));
              }
            }}
          >
            <mesh scale={isActive ? baseScale * 1.12 : baseScale}>
              <sphereGeometry args={[0.22, 24, 24]} />
              <meshStandardMaterial
                color={node.color}
                emissive={node.color}
                emissiveIntensity={isActive ? 1.2 : 0.8}
                roughness={0.2}
              />
            </mesh>
            <Html distanceFactor={8} position={[0, 0.35 + 0.35 * (node.size ?? 1), 0]} center>
              <div
                style={{
                  background: hasChildren ? "rgba(7,10,20,0.92)" : "rgba(7,10,20,0.82)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  padding: "6px 8px",
                  borderRadius: "10px",
                  fontSize: "12px",
                  color: "#f6f7ff",
                  boxShadow: isActive ? "0 10px 26px rgba(0,0,0,0.4)" : "0 6px 16px rgba(0,0,0,0.32)",
                  opacity: isActive ? 1 : 0.9,
                }}
              >
                {node.label}
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

function WarpBackdrop() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh scale={-40} position={[0, 5, 0]}>
      <sphereGeometry args={[1, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        side={THREE.BackSide}
        transparent={false}
        uniforms={{ uTime: { value: 0 } }}
        vertexShader={`
          varying vec2 vUv;
          varying vec3 vPos;
          void main() {
            vUv = uv;
            vPos = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          precision highp float;
          varying vec2 vUv;
          varying vec3 vPos;
          uniform float uTime;

          float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }

          float noise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            float a = hash(i);
            float b = hash(i + vec2(1.0, 0.0));
            float c = hash(i + vec2(0.0, 1.0));
            float d = hash(i + vec2(1.0, 1.0));
            vec2 u = f * f * (3.0 - 2.0 * f);
            return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
          }

          void main() {
            vec2 p = vUv * 4.0;
            float t = uTime * 0.25;
            float n = noise(p + t) + 0.5 * noise(p * 2.3 - t * 1.4);
            float swirl = sin((vUv.y - 0.5) * 8.0 + t * 3.0) * 0.2;
            float warp = n + swirl;

            vec3 base = vec3(0.07, 0.04, 0.12);
            vec3 glow = vec3(0.72, 0.26, 0.92) * clamp(warp, 0.0, 1.0);
            vec3 gold = vec3(0.72, 0.54, 0.16) * smoothstep(0.35, 0.9, warp);
            vec3 color = base + glow * 0.9 + gold * 0.45;

            gl_FragColor = vec4(color, 1.0);
          }
        `}
      />
    </mesh>
  );
}
