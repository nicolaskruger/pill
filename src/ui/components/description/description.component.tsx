import "./description.css"


const Description = () => (
    <ul className="description">
        <li>
            <p className="description__p-info">
                pill:
            </p>
            <p className="description__p-red-pill">
                red_pill
            </p>
            <p>
                or
            </p>
            <p className="description__p-blue-pill">
                blue_pill
            </p>
        </li>
        <li>
            <p className="description__p-command">
                add
            </p>
            <p>
                pill
            </p>
        </li>
        <li>
            <p className="description__p-command">
                eat
            </p>
            <p>
                index
            </p>
        </li>
    </ul>
)

export { Description }