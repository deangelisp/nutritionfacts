import React from "react";
import Skeleton from "react-loading-skeleton";

function FoodServingSize({ size }) {
    return (
        <div className="flex justify-center mb-4 text-sm">
            <p>Serving Size</p>
            <div className="ml-2 flex">
                <p>
                    {size !== null && size !== undefined ? (
                        size
                    ) : (
                        <Skeleton width={50} />
                    )}
                </p>
                <span>g</span>
            </div>
        </div>
    );
}

export default FoodServingSize;
