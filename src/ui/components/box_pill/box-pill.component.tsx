import { Pill } from "../../../types"
import { PillCompoent } from "../pill/pill.component";

import "./box-pill.css"

type Props = {
    pills: Pill[]
}

const BoxPill = (props: Props) => {

    const { pills } = props;

    return (
        <div className="BoxPill">
            {pills.map(pill => (
                <PillCompoent pill={pill} />
            ))}
        </div>
    )
}

export { BoxPill }