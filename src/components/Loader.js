import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props) {

  const mesh = useRef()
  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.01
    mesh.current.rotation.y += 0.01
    mesh.current.rotation.z += 0.01
  })

  return (
    <mesh
      {...props}
      ref={mesh}>
      <torusKnotGeometry args={[1.15, 0.35, 30, 8]} />
      <meshPhongMaterial shininess="200" color='#661556' />
    </mesh>
  )
}

function Outline(props) {

  const mesh = useRef()
  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.01
    mesh.current.rotation.y += 0.01
    mesh.current.rotation.z += 0.01
  })

  return (
    <mesh
      {...props}
      ref={mesh}>
      <torusKnotGeometry args={[1.5, 0.5, 15, 3]} />
      <meshPhongMaterial color='#606060' wireframe />
    </mesh>
  )
}

function Loader(props) {
    
    return (
        
        <div style={{height: '50vh'}}>
            <Canvas>
                <ambientLight />
                <pointLight position={[0, 3, 3]} color={0xe61a31} />
                <Box position={[0, 0, 0]} />
                <Outline position={[0, 0, 0]} />
            </Canvas>
        </div>

    );

}

export default Loader;