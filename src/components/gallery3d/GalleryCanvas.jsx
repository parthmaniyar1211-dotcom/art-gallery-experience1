import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import RoomEnvironment from './RoomEnvironment';
import FramedArtwork3D from './FramedArtwork3D';
import CameraRig from './CameraRig';

export default function GalleryCanvas({
  selectedArtwork,
  roomStyle,
  lightingMood,
  frameFinish,
  isFocusMode,
  resetTrigger,
  onToggleFocus
}) {
  return (
    <div className="w-full h-full relative select-none">
      <Canvas
        shadows
        camera={{
          fov: 46,
          position: [0, 1.75, 3.2],
          near: 0.1,
          far: 20
        }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance'
        }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          {/* Virtual Interior Room & Lighting */}
          <RoomEnvironment
            roomStyle={roomStyle}
            lightingMood={lightingMood}
          />

          {/* 3D Framed Artwork on Wall */}
          <FramedArtwork3D
            artwork={selectedArtwork}
            frameFinish={frameFinish}
            onInspect={onToggleFocus}
          />

          {/* Camera Constraints & Smooth Interpolator */}
          <CameraRig
            isFocusMode={isFocusMode}
            resetTrigger={resetTrigger}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
