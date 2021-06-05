import { Action, ActionTypes, Oper, State } from ".";
import { add, eat } from "./actions";



const reducer = (state: State, action: Action): State => {
    const { ADD, EAT } = ActionTypes;


    const oper: Oper = {
        [ADD]: add,
        [EAT]: eat
    }

    return oper[action.type](state, action);
}

export { reducer }