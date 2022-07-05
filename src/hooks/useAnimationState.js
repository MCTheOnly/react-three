import { useContext } from "react";
import { AnimationStateContext } from "../providers/AnimationStateProvider";

export default () => {

	const context = useContext(AnimationStateContext)
	console.log(context)
	return context
}
