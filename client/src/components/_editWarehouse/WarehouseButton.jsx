import React from "react";


function WarehouseButton (props) {
    const className = props.className;
    const type = props.type;
    const label = props.label;
    const id = props.id;
    
    return (
        <div className="warehouse__button--container">
            <button className={className} type={type}>{label}</button>
        </div>
    )
}

export default WarehouseButton;