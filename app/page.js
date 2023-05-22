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

  return (
    <>
     App here
    </>
  )
}
