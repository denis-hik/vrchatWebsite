import React from "react";

const EmptyUI: React.FC<{height: string | number}> = ({height}) => {

    return (
        <div style={{height: height}} />
    )
};

export default EmptyUI