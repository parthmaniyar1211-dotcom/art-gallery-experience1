import React, { useState, useEffect, useMemo } from 'react';
import * as THREE from 'three';

export default function FramedArtwork3D({
  artwork,
  frameFinish = 'oak',
  position = [0, 1.85, -2.48], // mounted on back wall (z = -2.5)
  onInspect
}) {
  const [texture, setTexture] = useState(null);
  const [hasError, setHasError] = useState(false);

  // Artwork dimensions: normalized standard aspect ratio
  const { artWidth, artHeight } = useMemo(() => {
    // If square
    if (artwork?.orientation === 'square') {
      return { artWidth: 1.5, artHeight: 1.5 };
    }
    // If landscape
    if (artwork?.orientation === 'landscape') {
      return { artWidth: 1.8, artHeight: 1.25 };
    }
    // Default portrait
    return { artWidth: 1.35, artHeight: 1.75 };
  }, [artwork?.orientation]);

  // Frame outer dimensions
  const matBorder = 0.08; // 8cm mat board
  const frameThickness = 0.045; // 4.5cm frame profile width
  const frameDepth = 0.06; // 6cm depth from wall
  const outerWidth = artWidth + (matBorder + frameThickness) * 2;
  const outerHeight = artHeight + (matBorder + frameThickness) * 2;

  // Frame finish materials
  const frameMaterial = useMemo(() => {
    const finishes = {
      oak: { color: '#C29F6F', roughness: 0.65, metalness: 0.05 },
      black: { color: '#1B1917', roughness: 0.35, metalness: 0.5 },
      walnut: { color: '#3E2413', roughness: 0.6, metalness: 0.05 },
      brass: { color: '#C9A55C', roughness: 0.3, metalness: 0.85 }
    };
    const config = finishes[frameFinish] || finishes.oak;
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(config.color),
      roughness: config.roughness,
      metalness: config.metalness
    });
  }, [frameFinish]);

  // Load texture with fallback
  useEffect(() => {
    if (!artwork?.image) return;

    setHasError(false);
    const loader = new THREE.TextureLoader();
    loader.load(
      artwork.image,
      (loadedTexture) => {
        loadedTexture.colorSpace = THREE.SRGBColorSpace;
        loadedTexture.generateMipmaps = true;
        loadedTexture.minFilter = THREE.LinearMipmapLinearFilter;
        setTexture(loadedTexture);
      },
      undefined,
      (err) => {
        console.warn('Failed to load artwork texture:', artwork.image, err);
        setHasError(true);
      }
    );

    return () => {
      if (texture) texture.dispose();
    };
  }, [artwork?.image]);

  return (
    <group 
      position={position} 
      onClick={onInspect}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'auto';
      }}
    >
      {/* 1. Outer Frame Backing Board (prevents seeing through) */}
      <mesh position={[0, 0, frameDepth / 2]} receiveShadow castShadow>
        <boxGeometry args={[outerWidth, outerHeight, frameDepth]} />
        <primitive object={frameMaterial} attach="material" />
      </mesh>

      {/* 2. White Gallery Mat Board (Passé-partout) */}
      <mesh position={[0, 0, frameDepth + 0.002]}>
        <planeGeometry args={[artWidth + matBorder * 2, artHeight + matBorder * 2]} />
        <meshStandardMaterial color="#FDFBF7" roughness={0.9} />
      </mesh>

      {/* 3. Artwork Canvas Print Mesh */}
      <mesh position={[0, 0, frameDepth + 0.004]}>
        <planeGeometry args={[artWidth, artHeight]} />
        {texture && !hasError ? (
          <meshBasicMaterial map={texture} toneMapped={true} />
        ) : (
          <meshStandardMaterial color="#E8E2D7" roughness={0.8}>
            {/* Fallback pattern if texture loading or offline */}
          </meshStandardMaterial>
        )}
      </mesh>

      {/* 4. Protective Optical Glass / Acrylic Cover */}
      <mesh position={[0, 0, frameDepth + 0.008]}>
        <planeGeometry args={[artWidth + matBorder * 2, artHeight + matBorder * 2]} />
        <meshPhysicalMaterial
          color="#FFFFFF"
          transparent={true}
          opacity={0.06}
          roughness={0.05}
          reflectivity={0.9}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* 5. Frame Moulding Borders (Extruded visual bevel on edges) */}
      {/* Top moulding */}
      <mesh position={[0, outerHeight / 2 - frameThickness / 2, frameDepth + 0.01]} castShadow>
        <boxGeometry args={[outerWidth, frameThickness, 0.015]} />
        <primitive object={frameMaterial} attach="material" />
      </mesh>
      {/* Bottom moulding */}
      <mesh position={[0, -outerHeight / 2 + frameThickness / 2, frameDepth + 0.01]} castShadow>
        <boxGeometry args={[outerWidth, frameThickness, 0.015]} />
        <primitive object={frameMaterial} attach="material" />
      </mesh>
      {/* Left moulding */}
      <mesh position={[-outerWidth / 2 + frameThickness / 2, 0, frameDepth + 0.01]} castShadow>
        <boxGeometry args={[frameThickness, outerHeight, 0.015]} />
        <primitive object={frameMaterial} attach="material" />
      </mesh>
      {/* Right moulding */}
      <mesh position={[outerWidth / 2 - frameThickness / 2, 0, frameDepth + 0.01]} castShadow>
        <boxGeometry args={[frameThickness, outerHeight, 0.015]} />
        <primitive object={frameMaterial} attach="material" />
      </mesh>

      {/* 6. Dedicated Museum Picture Spotlight (Illuminating the artwork from above) */}
      <spotLight
        position={[0, outerHeight / 2 + 0.7, 1.2]}
        target-position={[0, 0, 0]}
        intensity={2.8}
        angle={0.7}
        penumbra={0.6}
        color="#FFF6E8"
        castShadow
        shadow-bias={-0.0001}
      />

      {/* Brass / Charcoal Fixture Rod for the Spotlight */}
      <mesh position={[0, outerHeight / 2 + 0.5, 0.4]}>
        <cylinderGeometry args={[0.012, 0.012, 0.8, 8]} rotation={[Math.PI / 4, 0, 0]} />
        <primitive object={frameMaterial} attach="material" />
      </mesh>
      <mesh position={[0, outerHeight / 2 + 0.7, 0.6]}>
        <cylinderGeometry args={[0.04, 0.03, 0.1, 16]} rotation={[Math.PI / 4, 0, 0]} />
        <primitive object={frameMaterial} attach="material" />
      </mesh>
    </group>
  );
}
