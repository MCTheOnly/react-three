import { useRef } from 'react';
import * as THREE from 'three'
import { Html } from "@react-three/drei"
import Terminal from '../models/terminal/Terminal'
import PanelIO from '../JSX3D/PanelIO';


const TerminalJSX = (props) => {

	const terminal = useRef()

	return (
		<group>
			<mesh
				scale={[0.3, 0.3, 0.3]}
				localToWorld>

				<Terminal scale={[0.5, 0.5, 0.5]} />
			</mesh>
			<mesh
				position={[0, 3.8984708, -14.28]}
				rotation={new THREE.Euler(Math.PI * (-113 / 360), 0, 0)}
				onClick={(e) => console.log('click')}
				roatate={[0, 0, Math.Pi * (45 / 360)]}
				name={"panelIO"}
				renderOrder={2}>

				<Html className="content"
					position={[-0.1, 0, 0.06]}
					transform
					occlude >

					<div className="wrapper">
						<PanelIO setText={props.setText} />
					</div>
				</Html>
			</mesh>
		</group>
	);
}

export default TerminalJSX;
