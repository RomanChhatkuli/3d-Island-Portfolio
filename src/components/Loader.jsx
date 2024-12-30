import React from 'react'
import { Html } from '@react-three/drei'

function Loader() {
  return (
    <Html>
      <div className=" h-screen flex justify-center items-center">
        <span className="loading loading-spinner w-10 text-info"></span>
      </div>
    </Html>
  )
}

export default Loader