import { EnumDictionary, Pill } from "../types";

enum ActionTypes {
    ADD,
    EAT
}

type State = {
    currPill: Pill | null;
    pills: Pill[]
}
type Action = {
    type: ActionTypes
    pill?: Pill,
    index?: number
}



type Oper = EnumDictionary<ActionTypes, (state: State, action: Action) => State>;

export type { State, Action, Oper }
export { ActionTypes }
export * from "./reducer";