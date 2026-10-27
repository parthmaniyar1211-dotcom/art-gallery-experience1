import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

export default function CameraRig({ isFocusMode, resetTrigger }) {
  const controlsRef = useRef();
  const { camera } = useThree();

  // Targets
  const defaultPos = [0, 1.75, 3.2];
  const defaultTarget = [0, 1.7, -0.6];

  const focusPos = [0, 1.82, -0.5];
  const focusTarget = [0, 1.82, -2.48];

  const isTransitioning = useRef(false);
  const targetCamPos = useRef(new THREE.Vector3(...defaultPos));
  const targetLookAt = useRef(new THREE.Vector3(...defaultTarget));

  // Handle focus mode toggle
  useEffect(() => {
    if (isFocusMode) {
      targetCamPos.current.set(...focusPos);
      targetLookAt.current.set(...focusTarget);
    } else {
      targetCamPos.current.set(...defaultPos);
      targetLookAt.current.set(...defaultTarget);
    }
    isTransitioning.current = true;
  }, [isFocusMode]);

  // Handle manual reset button
  useEffect(() => {
    if (resetTrigger > 0) {
      targetCamPos.current.set(...defaultPos);
      targetLookAt.current.set(...defaultTarget);
      isTransitioning.current = true;
    }
  }, [resetTrigger]);

  useFrame(() => {
    if (isTransitioning.current && controlsRef.current) {
      // Smoothly interpolate camera position
      camera.position.lerp(targetCamPos.current, 0.08);
      controlsRef.current.target.lerp(targetLookAt.current, 0.08);
      controlsRef.current.update();

      // Stop transitioning when close enough
      if (
        camera.position.distanceTo(targetCamPos.current) < 0.02 &&
        controlsRef.current.target.distanceTo(targetLookAt.current) < 0.02
      ) {
        isTransitioning.current = false;
      }
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      enableDamping={true}
      dampingFactor={0.06}
      enablePan={false} // Disable panning to prevent camera getting lost
      // Distance limits (prevents clipping through walls or sofa)
      minDistance={1.4}
      maxDistance={4.5}
      // Vertical angle limits (prevents dipping under floor or through ceiling)
      minPolarAngle={Math.PI / 4} // ~45 deg
      maxPolarAngle={Math.PI / 2 - 0.04} // strictly above floor
      // Horizontal angle limits (prevents turning 180 into void)
      minAzimuthAngle={-Math.PI / 3.2}
      maxAzimuthAngle={Math.PI / 3.2}
      target={defaultTarget}
    />
  );
}
