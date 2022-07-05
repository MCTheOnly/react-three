import { createContext, useContext, useState, useReducer } from "react";

export const AnimationStateContext = createContext(null)
export const SetAnimationStateContext = createContext()

// export function useAnimationState() {
// 	return useContext(AnimationStateContext)
// }

// export function useSetAnimationState() {
// 	return useContext(SetAnimationStateContext)
// }

export default function AnimationStateProvider() {

	const [animationState, setAnimationState] = useState(false)

	function toggleAnimationState() {
		setAnimationState(animationState => !animationState)
	}

	return (
		<AnimationStateContext.Provider value={animationState}>
			<SetAnimationStateContext.Provider value={toggleAnimationState} >
			</SetAnimationStateContext.Provider>
		</AnimationStateContext.Provider>
	);
}
