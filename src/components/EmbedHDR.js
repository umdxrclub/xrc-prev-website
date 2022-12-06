
import React, { Suspense, useRef, useState } from 'react'
import TorusText from './TorusText';
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";


class EmbedHDR extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div style={{ position: "relative", width: '100vw', height: '100vh'}}>
            <Canvas>
                <Suspense fallback={TorusText}>
                    <OrbitControls enableZoom={false} enablePan={false} />
                    <Environment 
                        files={this.props.img}
                        path={'/images/360/'}
                    background />
                </Suspense>
            </Canvas>
        </div>
    );
  }
}

export default EmbedHDR;