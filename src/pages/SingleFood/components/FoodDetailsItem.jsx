import React from "react";
import Skeleton from "react-loading-skeleton";

function FoodDetailsItem({
    title,
    children,
    className,
    titleClassName,
    unit = "",
}) {
    return (
        <tr className={`border-b ${className}`}>
            <th className={`text-left py-2 ${titleClassName} `}>{title}</th>
            <td className="text-right py-2">
                {children !== null && children !== undefined ? (
                    `${children}${unit}`
                ) : (
                    <Skeleton width={50} />
                )}
            </td>
        </tr>
    );
}

export default FoodDetailsItem;
