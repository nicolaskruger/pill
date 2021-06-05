import { Action, State } from "..";

const eat = (state: State, action: Action): State => {
    const index = action.index as number;
    const { length } = state.pills;
    const { pills } = state;

    if (index < 0 || index >= length) {
        throw new Error("index out of range of pills");
    }

    return {
        ...state,
        currPill: state.pills[index],
        pills: [...pills.slice(0, index), ...pills.slice(index + 1, pills.length)]
    }
}

export { eat }