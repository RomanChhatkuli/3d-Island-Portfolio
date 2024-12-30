import React, { useEffect, useRef } from 'react'
import avatarScene from  '../assets/3d/avatar.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

function Avatar({...props}) {
    const avatarRef = useRef()
    const { scene, animations } = useGLTF(avatarScene)
    const { actions } = useAnimations(animations,avatarRef)

    useEffect(() =>{
        actions['Armature|mixamo.com|Layer0'].play()
    },[])

  return (
    <mesh {...props} ref={avatarRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Avatar
useGLTF.preload('/avatar.glb')



