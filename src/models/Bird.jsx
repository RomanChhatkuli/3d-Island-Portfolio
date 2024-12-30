import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import birdScene from '../assets/3d/bird.glb'
import { useFrame } from '@react-three/fiber'

function Bird() {
  const { scene, animations } = useGLTF(birdScene)
  const birdRef = useRef()
  const { actions } = useAnimations(animations, birdRef)

  useEffect(() => {
    actions["Take 001"].play()
  }, [])

  useFrame(({ clock, camera }) => {
    // Update the Y postion of bird like motion in sine wave form 
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.3 + 2

    // Check if bird has reached a certain endpoint according to the camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      // Change the direction to backward and rotate bird 180 degree on y axis 
      birdRef.current.rotation.y = Math.PI
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0
    }

    // Update X and Z position based on the direction 
    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.01
      birdRef.current.position.z -= 0.01
    }
    else {
      birdRef.current.position.x -= 0.01
      birdRef.current.position.z += 0.01
    }
  })

  return (
    <mesh
      ref={birdRef}
      position={[-5, -2, 1]}
      scale={[0.003, 0.003, 0.003]}
    >
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird
