import React from "react";


function InventoryButton(props) {
    const className = props.className;
    const type = props.type;
    const label = props.label;
    const id = props.id;
    const onClick = props.onClick;

    return (
        <div className="inventory__button--container">
            <button className={className} type={type}
                id={id} onClick={onClick}>{label}</button>
        </div>
    )
}

export default InventoryButton;