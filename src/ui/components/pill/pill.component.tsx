import { enumColorValue, Pill } from "../../../types";

import "./pill.styles.css"

type PropsPill = {
    pill: Pill;
}

const PillCompoent = (props: PropsPill) => {
    const { pill } = props;

    const color = enumColorValue[pill.color];

    return (
        <div className={`Pill Pill-${color}`}>
            <div className="Pill-l">

            </div>
            <div className="Pill-d">

            </div>
        </div>
    )

}

export { PillCompoent }