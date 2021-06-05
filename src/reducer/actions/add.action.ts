import { Action, State } from "..";
import { Pill } from "../../types";

const maxLength = 7;

const add = (state: State, action: Action): State => {

    const { length } = state.pills;

    const pill = action.pill as Pill

    if (length >= maxLength) {
        throw new Error("you have reach the max length")
    }

    return ({
        ...state,
        pills: [pill, ...state.pills]
    })

}

export { add }