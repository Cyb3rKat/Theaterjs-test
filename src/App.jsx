import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './App.css'

import Experience from './components/Experience'

function App() {

  return (
    <div className="App">
      <Canvas gl={{ preserveDrawingBuffer: true }} camera={{ position: [-5, 2, 2] }}>
        <OrbitControls />
        <Experience />
      </Canvas>

    </div>
  )
}

export default App
