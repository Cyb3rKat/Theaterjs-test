

import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Model } from './Model'
import { getProject, types, val } from '@theatre/core'
import studio from '@theatre/studio'
import { PerspectiveCamera } from '@theatre/r3f'
import extension from '@theatre/r3f/dist/extension'
import { SheetProvider, editable as e } from '@theatre/r3f'
import mystate from '../state.json'
import { useEffect, useState } from 'react'

studio.initialize()
studio.extend(extension)

export default function Experience() {
    const [animationplay, setAnimationPlay] = useState(false)

    const sheet = getProject('Alisa', { state: mystate }).sheet('sheet')

    const bgColor = "#84a4f4";

    const handleClick = () => {

        if (!animationplay) {
            sheet.sequence.play({ iterationCount: Infinity })
        } else {
            sheet.sequence.pause()
        }

    }


    // useEffect(() => {
    //     sheet.project.ready.then(() => sheet.sequence.play({ iterationCount: Infinity }))
    // }, [])



    return (
        <>

            <SheetProvider sheet={sheet}>

                {/* <color attach="background" args={[bgColor]} /> */}
                {/* <fog attach="fog" color={bgColor} near={-4} far={10} /> */}
                <OrbitControls />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-5, 5, -5]} intensity={1.5} />
                <Model />
                <ambientLight />
                <e.pointLight position={[10, 10, 10]} theatreKey="Light" />
                <mesh scale={[2, 2, 2]} position={[-5, 0, 0]} onClick={() => handleClick()}>
                    <boxGeometry />
                    <meshStandardMaterial />
                </mesh>

                <PerspectiveCamera
                    theatreKey="Camera"
                    makeDefault
                />
            </SheetProvider>

        </>
    )
}
