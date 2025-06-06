import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState, useRef } from 'react';
import Loader from '../components/Loader.jsx';
import Island from '../models/Island.jsx';
import { OrbitControls } from '@react-three/drei';
import Sky from '../models/Sky.jsx';
import Bird from '../models/Bird.jsx';
import Plane from '../models/Plane.jsx';
import HomeInfo from '../components/HomeInfo.jsx';
import sakura from '../assets/sakura.mp3';
import HandAnimation from '../components/HandAnimation.jsx';
import { soundoff, soundon } from '../assets/icons/index.js';

function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [showHandAnimation, setShowHandAnimation] = useState(false);
  const [showHandInfo, setshowHandInfo] = useState(false);

  const projectLinks = [
    "https://hamropasal-pdk5.onrender.com/api",
    "https://chat-app-backend-e639.onrender.com",
    "https://restnest.onrender.com",
  ];

  const pingProjects = async () => {
    try {
      projectLinks.forEach((url) => {
        fetch(url, { mode: "no-cors" })
          // .then(() => console.log(`Pinged: ${url}`))
          // .catch(() => console.log(`Failed to ping: ${url}`));
      });
    } catch (error) {
      console.error("Error pinging projects:", error);
    }
  };
    useEffect(() => {
      pingProjects();
    }, [])

  const handleDismiss = () => {
    setShowHandAnimation(false);
    setshowHandInfo(true)
  };

  useEffect(() => {
    setTimeout(() => {
      setShowHandAnimation(true)
    }, 1500)
  }, [])


  function adjustIsland() {
    let screenScale = null,
      screenPosition = [0, -7.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.68, 0.68, 0.68];
      screenPosition = [0, -4.5, -43];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  }
  const [islandScale, islandPostion, islandRotation] = adjustIsland();

  function adjustPlane() {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [1.2, 1.2, 1.2];
      screenPosition = [0, 0, -1];
    } else {
      screenScale = [2.5, 2.5, 2.5];
      screenPosition = [0, -0.3, -5];
    }
    return [screenScale, screenPosition];
  }
  const [planeScale, planePostion] = adjustPlane();

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.3;
  audioRef.current.loop = true;

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);


    return (
      <section className={`w-full h-screen relative ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}>
        {showHandAnimation && <HandAnimation onDismiss={handleDismiss} />}
        <div className="absolute top-28 sm:top-20 right-0 left-0 z-10 flex items-center justify-center">
          {(currentStage && showHandInfo) && <HomeInfo currentStage={currentStage} />}
        </div>

        <Canvas className="w-full h-screen bg-transparent" camera={{ near: 0.1, far: 1000 }}>
          <Suspense fallback={<Loader />}>
            <OrbitControls enablePan enableZoom enableRotate />
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <hemisphereLight groundColor="#000000" skyColor="#b1e1ff" intensity={1} />

            <Bird />

            <Sky position={[0, -3.5, -43]} rotation={[0.3, 4.7, 0]} isRotating={isRotating} />

            <Island
              position={islandPostion}
              scale={islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />

            <Plane isRotating={isRotating} rotation={[0, 20, 0]} scale={planeScale} position={planePostion} />
          </Suspense>
        </Canvas>

        <div className="absolute bottom-14 md:bottom-2">
          <img
            src={!isPlayingMusic ? soundoff : soundon}
            alt="sound"
            className="cursor-pointer w-12"
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          />
        </div>
      </section>
    );
  }

  export default Home;