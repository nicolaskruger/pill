import { useState } from "react";
import { useCommand, usePill } from "../../../hook";
import { Color, enumColorValue } from "../../../types";
import { BoxPill, Description, Input } from "../../components"
import "./drogs.css"
const Drogs = () => {


    const [command, setCommand] = useState("");


    const { state, add, eat } = usePill();


    const color = enumColorValue[state.currPill?.color as Color] || "";


    const run = useCommand(add, eat);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            run(command);
            setCommand("")
        }
        catch {

        }
    }

    return (
        <div className="drogs">
            <div className="drogs__div">
                <BoxPill pills={state.pills} />
                <Description />
            </div>
            <form action="" onSubmit={handleSubmit}>
                <Input className={`input drogs__input-${color} `} value={command} onChange={setCommand} />
            </form>
        </div>
    )

}

export { Drogs };