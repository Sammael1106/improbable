"use client";

import styles from './improbable.module.css'
import { clsx } from 'clsx';

import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three';
import { Leva, useControls } from 'leva'
import { RGBELoader } from 'three-stdlib'
import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber'
import {
  Center,
  Html,
  Float,
  useGLTF,
  Plane,
  useCursor,
  Instances,
  Environment,
  Lightformer,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  MeshTransmissionMaterial,
  ScrollControls,
  Scroll,
  useScroll,
  Image
} from '@react-three/drei'
import gsap from 'gsap'

export default function Home() {
  const config = useControls({
    zoom: { value: 65, min: 0, max: 100, step: 1 },
    backside: true,
    backsideThickness: { value: 0.3, min: 0, max: 2 },
    samples: { value: 16, min: 1, max: 32, step: 1 },
    resolution: { value: 1024, min: 64, max: 2048, step: 64 },
    transmission: { value: 1, min: 0, max: 1 },
    clearcoat: { value: 0, min: 0.1, max: 1 },
    clearcoatRoughness: { value: 0.0, min: 0, max: 1 },
    thickness: { value: 0.3, min: 0, max: 5 },
    chromaticAberration: { value: 5, min: 0, max: 5 },
    anisotropy: { value: 0.9, min: 0, max: 1, step: 0.01 },
    roughness: { value: 0, min: 0, max: 1, step: 0.01 },
    distortion: { value: 1, min: 0, max: 4, step: 0.01 },
    distortionScale: { value: 1, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: .2, min: 0, max: 1, step: 0.01 },
    ior: { value: 0, min: 0, max: 2, step: 0.01 },
    scale: { value: 3, min: 0, max: 50, step: 0.01 },
    color: '#ff9cf5',
    gColor: '#ff7eb3',
    shadow: '#750d57',
  })

  const [stage, setStage] = useState(1)
  // const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')
  // config.background = texture
  const overlay = useRef()

  useEffect(() => {
    overlay.current.style.opacity = 1;
    gsap.to(overlay.current.style, {
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
      delay: 0.2
    })
  }, [stage])

  const changeStage = (newstage) => {
    gsap.to(overlay.current.style, {
      opacity: 1,
      duration: 0.3,
      ease: "power3.out",
      onComplete: () => setStage(newstage)
    })
  }


  const stageClass = {
    [styles.stage1]: stage === 1,
    [styles.stage2]: stage === 2,
    [styles.stage3]: stage === 3,
    [styles.stage4]: stage === 4,
    [styles.stage5]: stage === 5,
  }

  return (
    <>
      <div  className={clsx(stageClass, styles.page)}>
        <Canvas shadows orthographic camera={{ position: [0, 20, 0], zoom: config.zoom, near: 0, far: 1000 }} gl={{ preserveDrawingBuffer: true }}>

          {stage === 1 && <StageOne config={config} setStage={changeStage} overlay={overlay}/>}
          {(stage === 2 || stage === 3) && <StageTwo config={config} setStage={changeStage} stage={stage} overlay={overlay}/>}
          {stage === 4 && <StageFour config={config} setStage={changeStage} overlay={overlay}/>}
          {stage === 5 && <StageFive config={config} setStage={changeStage} overlay={overlay}/>}

          <Environment resolution={32}>
            <group rotation={[-Math.PI / 4, -0.3, 0]}>
              <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
              <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[10, 2, 1]} />
              <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />
              <Lightformer type="ring" intensity={2} rotation-y={Math.PI / 2} position={[-0.1, -1, -5]} scale={10} />
            </group>
          </Environment>
          <AccumulativeShadows frames={100} color={config.shadow} colorBlend={5} toneMapped={true} alphaTest={0.8} opacity={0.8} scale={30} position={[0, 0, 0]}>
            <RandomizedLight amount={4} radius={15} ambient={0.5} intensity={1} position={[0, 10, -10]} size={15} mapSize={1024} bias={0.0001} />
          </AccumulativeShadows>
        </Canvas>
      </div>
      <div ref={overlay} className={styles.overlay}></div>
      <div className={clsx(stageClass, styles.pageIndicator)}>
        <div className={styles.pageIndicatorProgress} style={{width: `${stage*20}%`}}></div>
      </div>
    </>
  )
}

const StageOne = ({ config, setStage }) => {null}
const StageTwo = ({ config, setStage, stage }) => {null}
const ScrollableGroups = ({materialPoperties}) => {null}
const StageFour = ({ config, setStage }) => {null}
const StageFive = ({ config, setStage, stage }) => {null}