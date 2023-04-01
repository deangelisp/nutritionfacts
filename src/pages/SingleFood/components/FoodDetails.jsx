import React from "react";
import FoodDetailsItem from "./FoodDetailsItem";

function FoodDetails({ data }) {
    return (
        <div className="p-4 bg-white rounded mx-10">
            <table className="w-full">
                <tbody className="text-sm">
                    <FoodDetailsItem
                        title="Calories"
                        className="text-lg font-semibold"
                    >
                        {data?.calories}
                    </FoodDetailsItem>
                    <FoodDetailsItem
                        title="Total Fat"
                        className="font-semibold"
                        unit={"g"}
                    >
                        {data?.fat_total_g}
                    </FoodDetailsItem>
                    <FoodDetailsItem
                        title="Saturates"
                        titleClassName="pl-5"
                        unit={"g"}
                    >
                        {data?.fat_saturated_g}
                    </FoodDetailsItem>
                    <FoodDetailsItem
                        title="Total Carbohydrate"
                        className="font-semibold"
                        unit={"g"}
                    >
                        {data?.carbohydrates_total_g}
                    </FoodDetailsItem>
                    <FoodDetailsItem
                        title="Sugar"
                        titleClassName="pl-5"
                        unit={"g"}
                    >
                        {data?.sugar_g}
                    </FoodDetailsItem>
                    <FoodDetailsItem
                        title="Fiber"
                        titleClassName="pl-5"
                        unit={"g"}
                    >
                        {data?.fiber_g}
                    </FoodDetailsItem>
                    <FoodDetailsItem
                        title="Cholesterol"
                        className="font-semibold"
                        unit={"mg"}
                    >
                        {data?.cholesterol_mg}
                    </FoodDetailsItem>
                    <FoodDetailsItem
                        title="Sodium"
                        className="font-semibold"
                        unit={"mg"}
                    >
                        {data?.sodium_mg}
                    </FoodDetailsItem>
                    <FoodDetailsItem
                        title="Protein"
                        className="font-semibold border-b-4"
                        unit={"g"}
                    >
                        {data?.protein_g}
                    </FoodDetailsItem>
                    <FoodDetailsItem
                        title="Potassium"
                        className="border-none"
                        unit={"mg"}
                    >
                        {data?.potassium_mg}
                    </FoodDetailsItem>
                </tbody>
            </table>
        </div>
    );
}

export default FoodDetails;
