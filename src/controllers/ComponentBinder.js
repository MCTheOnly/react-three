import Screen from "../objects/Screen"
import TerminalJSX from "../objects/TerminalJSX"
import { useState } from "react"
import AnimationStateProvider from "../providers/AnimationStateProvider"

const ComponentBinder = () => {

	const [txt, setTxt] = useState()

	return (
		<group className="wrapper" >
			<AnimationStateProvider>
				<Screen txt={txt} setText={setTxt} />
				<TerminalJSX setText={setTxt} />
			</AnimationStateProvider>
		</group>
	);
}

export default ComponentBinder;
