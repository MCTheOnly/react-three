import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Terminal = () => {
	const gltf = useLoader(GLTFLoader, './terminal.glb')
	return (
		<primitive object={gltf.scene} position={[0, 8, -40]} />
	);
}

export default Terminal;
