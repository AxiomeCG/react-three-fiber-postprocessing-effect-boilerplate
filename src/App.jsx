import {Canvas} from '@react-three/fiber';
import './App.scss';
import {Center, Environment} from '@react-three/drei';
import {EffectComposer} from '@react-three/postprocessing';
import {Ripple} from './effects/RippleEffect.jsx';
import React from 'react';
import {Sponza} from './models/Sponza.jsx';
const Scene = () => {
  return <>
    <Center>
      <Sponza rotation-y={Math.PI/2} />
    </Center>
  </>
}

function App() {

  return (
    <>
      <Canvas>
        <Scene/>

        <ambientLight intensity={0.5}/>

        <EffectComposer>
          <Ripple />
        </EffectComposer>

        <Environment preset="night"/>

      </Canvas>
    </>
  );
}

export default App;
