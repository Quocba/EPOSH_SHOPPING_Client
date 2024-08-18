import React from "react";

function ButtonComponent({
    children,
    property,
    onPress,
}: {
    children: any;
    property?: any;
    onPress?: any;
}) {
    return (
        <button className={property} onClick={onPress}>
            {children}
        </button>
    );
}

export default ButtonComponent;
