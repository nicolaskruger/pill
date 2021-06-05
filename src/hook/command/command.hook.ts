import { Color, Pill } from "../../types";

type Add = (pill: Pill) => void;
type Eat = (index: number) => void;

type RegexOper = {
    regex: RegExp;
    oper: (command: string) => void
}

const { RED, BLUE } = Color;


const useCommand = (add: Add, eat: Eat) => {

    const eatRegex = /^eat /;

    const addRegex = /^add /;

    const oper = (command: string, regex: RegExp, regexMath: RegExp) => {
        const match = command.replace(regex, "")
            .match(regexMath);

        if (match === null) {
            throw new Error("invalid command");
        }
        return match;
    }

    const eatOper = (command: string) => {

        const match = oper(command, eatRegex, /\d+/);

        const toResponse = parseInt(match[0]);

        eat(toResponse);
    }

    const addOper = (command: string) => {

        const match = oper(command, addRegex, /\w+/);

        const red_pill: Pill = {
            color: RED,
            efect: "hungri"
        }

        const blue_pill: Pill = {
            color: BLUE,
            efect: "disie"
        }

        const pills = {
            red_pill: red_pill,
            blue_pill: blue_pill
        }

        const str = match[0] as keyof typeof pills;

        const toResponse: Pill = pills[str] || null;


        if (toResponse === null) {
            throw new Error("invalid command")
        }

        add(toResponse);
    }

    const regex: RegexOper[] = [
        { regex: eatRegex, oper: eatOper },
        { regex: addRegex, oper: addOper }
    ]

    const run = (command: string) => {
        const oper = regex.find(reg => reg.regex.test(command)) || null;
        if (oper === null) {
            throw new Error("invalid command");
        }
        oper.oper(command);
    }

    return run;
}

export { useCommand }