import React, { useRef, Suspense } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'


const vertexShader =  `
    varying vec2 vUv;
    uniform float uTime;

    void main() {
        vUv = uv;
        vec3 transformed = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0) ;   
    }
`;

const fragmentShader = `
    varying vec2 vUv;
    uniform float uTime;
    uniform sampler2D uTexture;

    void main() {
        float time = uTime;

        vec2 uv = vUv;
        vec2 repeat = vec2(8.0, 3.0);
        uv = fract(uv * repeat + vec2(0.0, (3.0 * uTime)));
        uv.x += 0.1 * sin(uv.y);
        vec4 color = texture2D(uTexture, uv);
        gl_FragColor = color;
    }
`;

function Torus(props) {

  const loadingTexture = useLoader(TextureLoader, 'images/loading.png');
  const mesh = useRef();

  let uniforms = {
      uTime: { value: 0 },
      uTexture: { type: "t", value: loadingTexture }
  }

  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.005;
    mesh.current.rotation.y += 0.005;
    mesh.current.rotation.z += 0.005;
    uniforms.uTime.value += 0.005;
  })

  return (
    <mesh
      {...props}
      ref={mesh}>
      <torusKnotGeometry args={[1.15, 0.35, 50, 50]} />
      <shaderMaterial 
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
      />
    </mesh>
  )
}

function Loader(props) {
    
    return (
        
        <div style={{height: '80vh'}}>

            <Canvas>
                <ambientLight />
                <Torus position={[0, 0, 0]} />
            </Canvas>

        </div>

    );

}

export default Loader;