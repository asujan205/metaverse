import React from "react";
import { Cone, MeshDistortMaterial } from "@react-three/drei";
 export default function ConeElement(){
    return <Cone args={[1,2,32]} position={[-10,20,40]} rotation={0.5} scale={[1,1,1]}>
        <MeshDistortMaterial color="red"/>
        </Cone>

 }