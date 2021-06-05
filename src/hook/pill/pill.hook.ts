import { useReducer } from "react";
import { Action, ActionTypes, reducer, State } from "../../reducer";
import { Pill } from "../../types";

const defaultState: State = {
    currPill: null,
    pills: []
}

const usePill = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const { ADD, EAT } = ActionTypes;

    const add = (pill: Pill) => {
        const action: Action = {
            type: ADD,
            pill: pill
        }
        dispatch(action);
    }

    const eat = (index: number) => {
        const action: Action = {
            type: EAT,
            index: index
        }
        dispatch(action);
    }

    return {
        state,
        eat,
        add
    }

}

export { usePill };