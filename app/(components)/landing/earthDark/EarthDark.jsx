/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 earthDark.gltf 
Author: jstabe (https://sketchfab.com/jstabe)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hologram-earth-dark-land-2b353748066649849d5def841324b229
Title: Hologram Earth_Dark Land
*/
"use client"
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export function EarthDark(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/earthDark.gltf')
  const { actions } = useAnimations(animations, group)
  const { camera } = useThree()
  camera.position.set(0,0,2.75)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Earth_0" rotation={[0, 0.017, -0.161]}>
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.EarthHologram} />
              </group>
              <group name="Empty_2" position={[0.016, 1.257, 0.021]} scale={0.128}>
                <group name="GreenCube_1" scale={0.195}>
                  <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.Green} />
                  <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.EmissiveCenterBlue} />
                  <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials['Green.001']} />
                </group>
              </group>
              <group name="Clouds_3">
                <mesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.Clouds} />
              </group>
              <group name="Arc1_5" rotation={[0.02, 0.611, -0.012]} scale={1.592}>
                <group name="ArcModel_4" position={[0, -0.04, 0.008]} scale={0.628}>
                  <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.M_Lines} />
                </group>
              </group>
              <group name="Empty001_7" position={[0.02, -1.257, -0.018]} rotation={[0, 0.084, 0]} scale={0.128}>
                <group name="GreenCube001_6" scale={0.195}>
                  <mesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials['ViloetCUbe.002']} />
                  <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.EmissiveCenterBlue} />
                  <mesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials['VioletCUbe.001']} />
                </group>
              </group>
              <group name="Arc1001Viloet_9" rotation={[-3.118, 0.785, -0.017]} scale={1.592}>
                <group name="ArcModel001_8" position={[0, -0.04, 0.008]} scale={0.628}>
                  <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.M_Lines} />
                </group>
              </group>
              <group name="Empty002_11" position={[1.257, -0.005, -0.002]} rotation={[0, 0.084, 0]} scale={0.128}>
                <group name="GreenCube002_10" scale={0.195}>
                  <mesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials.BlueCubee} />
                  <mesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials.EmissiveCenterBlue} />
                  <mesh name="Object_27" geometry={nodes.Object_27.geometry} material={materials.BlueCube} />
                </group>
              </group>
              <group name="Arc1002Blue_13" rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.592}>
                <group name="ArcModel002_12" position={[0, -0.04, 0.008]} scale={0.628}>
                  <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.M_Lines} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/earthDark.gltf')
