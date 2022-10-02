
import React, { Suspense } from 'react'
import TorusText from '../components/TorusText';
import { Canvas } from "@react-three/fiber";
import { useLoader, useThree } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import sceneUrl from '../models/lab/lab.glb';
import { Html, useProgress } from '@react-three/drei'

function LabScan() {

    const gltf = useLoader(GLTFLoader, sceneUrl);
    return (
        <Suspense fallback={<br></br>}>
            <primitive object={gltf.scene} position={[0, -0.5, 0.75]}></primitive>
        </Suspense>
    );

}


class LabTour extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div style={{ position: "relative", width: '100vw', height: '100vh'}}>
            <Suspense fallback={<TorusText />}>
                <Canvas adjustCamera camera={{ position: [0, 0, -3] }}>
                    <ambientLight />
                        <LabScan />
                        <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            minPolarAngle={Math.PI / 2} 
                            maxPolarAngle={2 * Math.PI / 3}
                            />
                </Canvas>
            </Suspense>
        </div>
    );
  }
}

export default LabTour;