import React, { useMemo } from 'react';
import * as THREE from 'three';

export default function RoomEnvironment({
  roomStyle = 'scandinavian', // 'scandinavian', 'loft', 'terracotta'
  lightingMood = 'daylight'   // 'daylight', 'golden', 'evening'
}) {
  // Theme palette definitions
  const theme = useMemo(() => {
    switch (roomStyle) {
      case 'loft':
        return {
          wallColor: '#D8D4CC',
          floorColor: '#4A3525',
          skirtingColor: '#2B2622',
          sofaColor: '#3A3836',
          cushionColor: '#D2C7B6',
          tableColor: '#1A1816',
          rugColor: '#B0A89C',
          vaseColor: '#E2DDD4'
        };
      case 'terracotta':
        return {
          wallColor: '#E8D4C8',
          floorColor: '#9C7A52',
          skirtingColor: '#C4907E',
          sofaColor: '#FAF7F2',
          cushionColor: '#B8583B',
          tableColor: '#5C3A21',
          rugColor: '#D9C8B6',
          vaseColor: '#B8583B'
        };
      case 'scandinavian':
      default:
        return {
          wallColor: '#F7F4EE',
          floorColor: '#BCA074',
          skirtingColor: '#EAE4DA',
          sofaColor: '#EAE6DF',
          cushionColor: '#8C7D6B',
          tableColor: '#8B6E4E',
          rugColor: '#DED6CA',
          vaseColor: '#F5EFEB'
        };
    }
  }, [roomStyle]);

  // Lighting configurations
  const lighting = useMemo(() => {
    switch (lightingMood) {
      case 'golden':
        return {
          ambientIntensity: 0.65,
          ambientColor: '#FFE5C4',
          sunColor: '#FFAE5C',
          sunIntensity: 2.2,
          sunPosition: [-4, 3, 2],
          lampIntensity: 1.2,
          windowGlow: '#FFCC88'
        };
      case 'evening':
        return {
          ambientIntensity: 0.35,
          ambientColor: '#D4C4B0',
          sunColor: '#6B7A99',
          sunIntensity: 0.4,
          sunPosition: [-4, 2, 0],
          lampIntensity: 2.5,
          windowGlow: '#1E2538'
        };
      case 'daylight':
      default:
        return {
          ambientIntensity: 0.85,
          ambientColor: '#FFFDF9',
          sunColor: '#FFF8EE',
          sunIntensity: 1.9,
          sunPosition: [-4, 4, 3],
          lampIntensity: 0.6,
          windowGlow: '#E8F2FF'
        };
    }
  }, [lightingMood]);

  // Procedural Wood Flooring Texture
  const floorTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Base background
    ctx.fillStyle = theme.floorColor;
    ctx.fillRect(0, 0, 512, 512);

    // Plank lines
    const plankHeight = 32;
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.18)';
    ctx.lineWidth = 1.5;

    for (let y = 0; y < 512; y += plankHeight) {
      // Horizontal seam
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y);
      ctx.stroke();

      // Vertical staggered seams
      const offset = (y / plankHeight) % 2 === 0 ? 0 : 128;
      for (let x = offset; x < 512; x += 256) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + plankHeight);
        ctx.stroke();
      }

      // Subtle plank tone variation
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.04})`;
      ctx.fillRect(0, y, 512, plankHeight);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(5, 5);
    return tex;
  }, [theme.floorColor]);

  return (
    <group>
      {/* 1. LIGHTING SETUP */}
      <ambientLight intensity={lighting.ambientIntensity} color={lighting.ambientColor} />

      {/* Directional Sunlight through the left window */}
      <directionalLight
        position={lighting.sunPosition}
        intensity={lighting.sunIntensity}
        color={lighting.sunColor}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={15}
        shadow-camera-left={-4}
        shadow-camera-right={4}
        shadow-camera-top={4}
        shadow-camera-bottom={-4}
        shadow-bias={-0.0005}
      />

      {/* Warm Fill Light */}
      <directionalLight
        position={[3, 3, 2]}
        intensity={0.4}
        color="#FFEED6"
      />

      {/* 2. ARCHITECTURAL ROOM STRUCTURE */}
      {/* Wooden Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[7, 6]} />
        <meshStandardMaterial
          map={floorTexture}
          roughness={0.45}
          metalness={0.05}
        />
      </mesh>

      {/* Back Wall (Artwork mounting wall) */}
      <mesh position={[0, 1.8, -2.5]} receiveShadow>
        <planeGeometry args={[7, 3.6]} />
        <meshStandardMaterial
          color={theme.wallColor}
          roughness={0.9}
        />
      </mesh>

      {/* Left Wall with Architectural Window Cutout */}
      <mesh position={[-3.5, 1.8, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[6, 3.6]} />
        <meshStandardMaterial
          color={theme.wallColor}
          roughness={0.9}
        />
      </mesh>

      {/* Large Minimalist Left Window Frame */}
      <group position={[-3.48, 1.9, 0]} rotation={[0, Math.PI / 2, 0]}>
        {/* Exterior sky backdrop glow */}
        <mesh position={[0, 0, -0.05]}>
          <planeGeometry args={[2.4, 2.6]} />
          <meshBasicMaterial color={lighting.windowGlow} />
        </mesh>
        {/* Outer Window casing */}
        <mesh>
          <boxGeometry args={[2.5, 2.7, 0.04]} />
          <meshStandardMaterial color="#1E1C1A" roughness={0.4} />
        </mesh>
        {/* Glass panes */}
        <mesh position={[0, 0, 0.01]}>
          <planeGeometry args={[2.3, 2.5]} />
          <meshPhysicalMaterial
            color="#FFFFFF"
            transparent
            opacity={0.15}
            roughness={0.1}
            transmission={0.85}
          />
        </mesh>
        {/* Window Mullions */}
        <mesh position={[0, 0, 0.02]}>
          <boxGeometry args={[0.04, 2.5, 0.03]} />
          <meshStandardMaterial color="#1E1C1A" />
        </mesh>
        <mesh position={[0, 0, 0.02]}>
          <boxGeometry args={[2.3, 0.04, 0.03]} />
          <meshStandardMaterial color="#1E1C1A" />
        </mesh>
      </group>

      {/* Right Wall */}
      <mesh position={[3.5, 1.8, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[6, 3.6]} />
        <meshStandardMaterial
          color={theme.wallColor}
          roughness={0.9}
        />
      </mesh>

      {/* Ceiling */}
      <mesh position={[0, 3.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[7, 6]} />
        <meshStandardMaterial color="#FAF9F6" roughness={0.95} />
      </mesh>

      {/* Skirting Boards (Baseboards) */}
      <mesh position={[0, 0.075, -2.48]}>
        <boxGeometry args={[7, 0.15, 0.02]} />
        <meshStandardMaterial color={theme.skirtingColor} roughness={0.7} />
      </mesh>
      <mesh position={[-3.48, 0.075, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[6, 0.15, 0.02]} />
        <meshStandardMaterial color={theme.skirtingColor} roughness={0.7} />
      </mesh>
      <mesh position={[3.48, 0.075, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[6, 0.15, 0.02]} />
        <meshStandardMaterial color={theme.skirtingColor} roughness={0.7} />
      </mesh>

      {/* 3. TASTEFUL SCANDINAVIAN FURNITURE */}
      {/* Woven Wool Area Rug */}
      <mesh position={[0, 0.005, -0.6]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[3.2, 2.2]} />
        <meshStandardMaterial color={theme.rugColor} roughness={0.95} />
      </mesh>

      {/* Designer Bouclé Sofa / Curved Bench */}
      <group position={[0, 0, -0.8]} receiveShadow castShadow>
        {/* Main Seat Cushion */}
        <mesh position={[0, 0.28, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.2, 0.32, 0.78]} />
          <meshStandardMaterial color={theme.sofaColor} roughness={0.85} />
        </mesh>

        {/* Low Backrest */}
        <mesh position={[0, 0.52, -0.32]} castShadow receiveShadow>
          <boxGeometry args={[2.2, 0.36, 0.18]} />
          <meshStandardMaterial color={theme.sofaColor} roughness={0.85} />
        </mesh>

        {/* Accent Throw Pillows */}
        <mesh position={[-0.7, 0.48, -0.22]} rotation={[0, 0.15, 0.08]} castShadow>
          <boxGeometry args={[0.38, 0.34, 0.12]} />
          <meshStandardMaterial color={theme.cushionColor} roughness={0.9} />
        </mesh>
        <mesh position={[0.7, 0.48, -0.22]} rotation={[0, -0.15, -0.08]} castShadow>
          <boxGeometry args={[0.38, 0.34, 0.12]} />
          <meshStandardMaterial color={theme.cushionColor} roughness={0.9} />
        </mesh>

        {/* Tapered Wood Legs */}
        {[-0.95, 0.95].map((x, idx) =>
          [-0.3, 0.3].map((z, idz) => (
            <mesh key={`${idx}-${idz}`} position={[x, 0.06, z]} castShadow>
              <cylinderGeometry args={[0.025, 0.015, 0.12, 12]} />
              <meshStandardMaterial color="#4A3425" roughness={0.6} />
            </mesh>
          ))
        )}
      </group>

      {/* Modernist Pedestal Coffee / Side Table */}
      <group position={[1.5, 0, -0.9]} castShadow receiveShadow>
        {/* Table Top */}
        <mesh position={[0, 0.42, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.32, 0.32, 0.03, 32]} />
          <meshStandardMaterial color={theme.tableColor} roughness={0.5} />
        </mesh>
        {/* Fluted / Central Column */}
        <mesh position={[0, 0.2, 0]} castShadow>
          <cylinderGeometry args={[0.1, 0.14, 0.4, 24]} />
          <meshStandardMaterial color={theme.tableColor} roughness={0.5} />
        </mesh>
        {/* Base */}
        <mesh position={[0, 0.01, 0]} receiveShadow>
          <cylinderGeometry args={[0.22, 0.22, 0.02, 32]} />
          <meshStandardMaterial color={theme.tableColor} roughness={0.5} />
        </mesh>

        {/* Artisanal Ceramic Urn / Vase on Table */}
        <mesh position={[0, 0.52, 0]} castShadow>
          <cylinderGeometry args={[0.05, 0.09, 0.18, 16]} />
          <meshStandardMaterial color={theme.vaseColor} roughness={0.8} />
        </mesh>
        {/* Dried Botanical Stems */}
        <mesh position={[0, 0.68, 0]} rotation={[0.1, 0, 0.15]}>
          <cylinderGeometry args={[0.003, 0.003, 0.25, 6]} />
          <meshStandardMaterial color="#8C7A65" roughness={0.9} />
        </mesh>
        <mesh position={[0.03, 0.72, 0.02]} rotation={[-0.1, 0, -0.2]}>
          <cylinderGeometry args={[0.003, 0.003, 0.28, 6]} />
          <meshStandardMaterial color="#A38E75" roughness={0.9} />
        </mesh>
      </group>

      {/* Architectural Floor Lamp */}
      <group position={[-1.6, 0, -1.3]}>
        {/* Lamp Base */}
        <mesh position={[0, 0.015, 0]} receiveShadow>
          <cylinderGeometry args={[0.18, 0.18, 0.03, 24]} />
          <meshStandardMaterial color="#1E1C1A" roughness={0.3} metalness={0.6} />
        </mesh>
        {/* Tall Rod */}
        <mesh position={[0, 0.75, 0]} castShadow>
          <cylinderGeometry args={[0.012, 0.012, 1.5, 12]} />
          <meshStandardMaterial color="#1E1C1A" roughness={0.3} metalness={0.6} />
        </mesh>
        {/* Linen Shade */}
        <mesh position={[0, 1.45, 0]} castShadow>
          <cylinderGeometry args={[0.16, 0.22, 0.28, 24]} />
          <meshStandardMaterial color="#FAF5EB" roughness={0.9} />
        </mesh>
        {/* Lamp Light Source */}
        <pointLight
          position={[0, 1.45, 0]}
          intensity={lighting.lampIntensity}
          distance={4.5}
          color="#FFDFB0"
          castShadow
        />
      </group>
    </group>
  );
}
