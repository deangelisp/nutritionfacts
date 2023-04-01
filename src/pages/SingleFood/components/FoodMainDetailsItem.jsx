import React from "react";
import Skeleton from "react-loading-skeleton";

function FoodMainDetailsItem({ title, children, unit = "" }) {
    return (
        <div className="bg-slate-50 rounded flex items-center flex-col p-2">
            <span className="text-2xs md:text-sm uppercase font-semibold tracking-wider text-slate-800">
                {title}
            </span>
            <span className="text-xl md:text-2xl font-bold block w-full text-center">
                {children !== null && children !== undefined ? (
                    `${children}${unit}`
                ) : (
                    <Skeleton />
                )}
            </span>
        </div>
    );
}

export default FoodMainDetailsItem;
