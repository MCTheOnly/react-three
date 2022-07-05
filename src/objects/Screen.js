import ScreenJSX from "../JSX3D/ScreenJSX"
import { Html } from "@react-three/drei"
import { useRef, useState } from "react"

const Screen = (props) => {

	const box = useRef()

	return (
		<group>
			<mesh ref={box} position={[0, 15, -50]} scale={0.6} onClick={(e) => console.log('click')} name={"screen"} renderOrder={2}>
				<boxGeometry args={[76, 40, 0.1]} />
				<meshPhysicalMaterial color={"#000"} />
			</mesh>
			<mesh >
				<Html className="content" position={[0, 15, -49.9]} scale={[3.5, 3.5, 1]} transform occlude >
					<div className="wrapper">
						<ScreenJSX txt={props.txt} setText={props.setText} />
					</div>
				</Html>
			</mesh>
		</group>
	);
}

export default Screen;
