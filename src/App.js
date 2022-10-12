import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import {Canvas} from '@react-three/fiber'
import Box from './Components/Box'
import {OrbitControls} from '@react-three/drei'
import AnimatedSphere from './Components/AnimatedSphare';
function App() {
  return (
    <div className="App">
      
     <Canvas className='Canvas'>
      <OrbitControls enableZoom={false}/>
      <ambientLight intensity={0.5}/>
      <directionalLight position={[-2,5,2]} intensity={1}/>
       {/* <Box/> */}
       <AnimatedSphere/>
     </Canvas>
    </div>
  );
}

export default App;
