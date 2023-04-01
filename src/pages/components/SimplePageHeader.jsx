import React from "react";
import Skeleton from "react-loading-skeleton";

function SimplePageHeader({ children }) {
    return (
        <h1 className="text-center capitalize mb-9">
            {children || <Skeleton />}
        </h1>
    );
}

export default SimplePageHeader;
