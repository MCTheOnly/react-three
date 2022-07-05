import { useContext } from "react"
import Typer from "../effects/Typer"
// import { useAnimationState, useSetAnimationState } from "../providers/AnimationStateProvider"
import useAnimationState from "../hooks/useAnimationState"

const PanelIO = (props) => {

	let messages = [
		'Hello user',
		'This is you:',
		'<CameraControls />'
	]

	// console.log(useAnimationState())

	const { settings } = useAnimationState();

	console.log(settings)

	const message = () => {
		//context false
		(async () => {
			for (let i = 0; i < messages.length; i++) {
				if (i > 0) {
					await delay(3000)
				}
				props.setText(<Typer speed={100} msg={messages[i]} ></Typer>)
			}
		})();
	}

	const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

	return (
		<div className="panelIO-render js--panelIO" animationState={true}>
			<div
				className="panel-start js--start"
				onClick={() => { message() }}>
				START
			</div>
		</div>
	);
}

export default PanelIO;
