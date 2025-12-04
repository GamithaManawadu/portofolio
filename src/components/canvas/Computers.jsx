import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useTheme } from "../../context/ThemeContext";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./workbench/scene.gltf");
  const { isDark } = useTheme();
  const scale = isMobile ? 4.5 : 3.5;
  const position = isMobile ? [0, -3, -2.2] : [0, -4.25, 2.0];

  useEffect(() => {
    computer.scene.traverse((child) => {
      if (child.isMesh && child.geometry) {
        child.geometry.computeBoundingBox();
        child.geometry.computeBoundingSphere();
      }
    });
  }, [computer.scene]);

  return (
    <mesh>
      <hemisphereLight intensity={isDark ? 0.15 : 0} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={isDark ? 1 : 0}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={isDark ? 1 : 0} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[0, 5, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    setIsMobile(mobileQuery.matches);
    setIsDesktop(desktopQuery.matches);

    const handleMobileChange = (e) => setIsMobile(e.matches);
    const handleDesktopChange = (e) => setIsDesktop(e.matches);

    mobileQuery.addEventListener("change", handleMobileChange);
    desktopQuery.addEventListener("change", handleDesktopChange);

    return () => {
      mobileQuery.removeEventListener("change", handleMobileChange);
      desktopQuery.removeEventListener("change", handleDesktopChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 4, 20], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minAzimuthAngle={-0.4}
          maxAzimuthAngle={0.4}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} isDesktop={isDesktop} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
