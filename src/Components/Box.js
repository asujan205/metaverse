import React from "react";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import map from '../images/map.jpg'
import { MeshDistortMaterial } from "@react-three/drei";
export default function Box(){
    const texture = useLoader(TextureLoader, map)
    return <mesh rotation={[90,0,20]}>
        
        <boxBufferGeometry attach="geometry" args={[3,3,3]}/>
        {/* <meshLambertMaterial attach="material" color="red"/>
        <meshLambertMaterial attach="material" map={texture}/> */}
        <MeshDistortMaterial speed={5} attach="material" map={texture}/>
    </mesh>;
}