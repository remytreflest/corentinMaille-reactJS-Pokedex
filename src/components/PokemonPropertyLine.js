
const PokemonPropertyLine = ({label, value}) => {
    return (
        <li className="list-group-item list-group-item-action position-relative">
            {/* LABEL & VALUE */}
            <div className="position-absolute w-100 pe-4 font-monospace" style={{height: "22px", lineHeight: "normal"}}>
                <div className="float-start text-light" style={{ width: "fit-content"}}>{label}</div>
                <div className="float-end text-black me-1">{ value } %</div>
            </div>

            {/* PROGRESS BAR */}
            <div className="progress row" style={{height: "22px"}}>
                <div className="progress-bar bg-success" role="progressbar" aria-label="Basic example"
                     aria-valuenow={value} style={{width: value + "%"}} aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
        </li>
    )
}

export default PokemonPropertyLine