import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import skyScene from '../assets/3d/sky.glb'
import { useFrame } from '@react-three/fiber'

const Sky = ({isRotating,...props}) => {
  const { scene } = useGLTF(skyScene)
  const skyRef = useRef()

  useFrame((_, delta) => {
    if(isRotating){
      skyRef.current.rotation.y += 0.25 * delta
    }
  })

return (
    <mesh ref={skyRef} {...props}>
        <primitive object={scene}/>
    </mesh>
)
}
export default Sky;

