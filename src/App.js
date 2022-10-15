import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import {Canvas} from '@react-three/fiber'
import Box from './Components/Box'
import {OrbitControls} from '@react-three/drei'
import AnimatedSphere from './Components/AnimatedSphare';
import ConeElement from './Components/ConeElement';
function App() {
  return (
    <div className="App">
      
     <Canvas className='Canvas'>
      <ambientLight intensity={0.5}/>
<Box/>
<AnimatedSphere/>
<ConeElement/>
     </Canvas>
    </div>
  );
}

export default App;
