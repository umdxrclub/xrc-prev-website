import React, { useRef, Suspense } from 'react'
import { NearestFilter } from 'three';
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
    uniform float xRepeat;
    uniform float yRepeat;

    void main() {
        float time = uTime;

        vec2 uv = vUv;
        vec2 repeat = vec2(xRepeat, yRepeat);
        uv = fract(uv * repeat + vec2(0.0, (3.0 * uTime)));
        uv.x += 0.1 * sin(uv.y);
        vec4 color = texture2D(uTexture, uv);
        gl_FragColor = color;
    }
`;

function Torus(props) {

  let loadingTexture = useLoader(TextureLoader, "images/three_assets/" + props.image);
  loadingTexture.minFilter = NearestFilter;
  const mesh = useRef();

  let uniforms = {
      uTime: { value: 0 },
      uTexture: { type: "t", value: loadingTexture },
      xRepeat: { value: props.xRepeat },
      yRepeat: { value: props.yRepeat },
  }

  useFrame((state, delta) => {
    mesh.current.rotation.z += 0.02;
    uniforms.uTime.value += 0.005;
  })

  return (
      <mesh
        {...props}
        ref={mesh}>
        {/*<torusKnotGeometry args={[1.15, 0.35, 50, 50]} />*/}
        <torusGeometry args={[2, 1, 20, 20]} />
        <shaderMaterial 
          color={0x000000}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent={true}
        />
      </mesh>
  )
}

function TorusText(props) {
    
    return (
        
        <div style={{height: '80vh'}}>

          <Suspense fallback={<br/>}>
            <Canvas>
                <ambientLight />
                <Torus position={[0, 0, 0]} 
                  image={ props.image ? props.image : "loading.png" }
                  xRepeat={ props.xRepeat ? props.xRepeat : 2.0 }
                  yRepeat = { props.yRepeat ? props.yRepeat : 4.0 }
                />
            </Canvas>
          </Suspense>

        </div>

    );

}

export default TorusText;