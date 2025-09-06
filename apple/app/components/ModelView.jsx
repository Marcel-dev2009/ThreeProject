'use client'
import dynamic from "next/dynamic";
import Loader from "./Loader";
import * as THREE from 'three'
const Lights = dynamic(() => import("./light") , {ssr:false});
const Scene = dynamic(() => import("./Scene") , {ssr:false});
import { Suspense  } from "react";
const OrbitControls = dynamic(async () => (await import("@react-three/drei")).OrbitControls, {
  ssr : false});
const PerspectiveCamera = dynamic(
  async () => (await import("@react-three/drei")).PerspectiveCamera,
  { ssr: false }
)

const View = dynamic(
  async () => (await import("@react-three/drei")).View,
  { ssr: false }
)

const Html = dynamic(
  async () => (await import("@react-three/drei")).Html,
  { ssr: false }
)
const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''} `}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4 ]} />

      <Lights />

      <OrbitControls 
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0,0,0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      /> 

      <group ref={groupRef} name={`${index === 1} ? 'small' : 'large`} position={[0, 0 ,0]}>
        <Suspense fallback={<Loader/>}>
          <Scene 
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  )
}

export default ModelView