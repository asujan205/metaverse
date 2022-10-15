import React  from "react";
 import { Sphere,MeshDistortMaterial } from "@react-three/drei";
 export default function AnimatedSphere(){
        return <Sphere  visible args={[1,100,200]} scale={2} position={[1,1,1]}>
            <MeshDistortMaterial color={'lightblue'} speed={0.5} factor={0.5}  distort={1}/>
            
        </Sphere>
 }