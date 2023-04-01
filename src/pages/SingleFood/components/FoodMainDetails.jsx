import React from "react";
import FoodMainDetailsItem from "./FoodMainDetailsItem";

function FoodMainDetails({ calories, protein, carbs, fat }) {
    return (
        <div className="p-4 bg-white shadow-sm rounded grid grid-cols-4 gap-3 mb-5">
            <FoodMainDetailsItem title="Calories">
                {calories}
            </FoodMainDetailsItem>
            <FoodMainDetailsItem title="Protein" unit={"g"}>
                {protein}
            </FoodMainDetailsItem>
            <FoodMainDetailsItem title="Carbs" unit={"g"}>
                {carbs}
            </FoodMainDetailsItem>
            <FoodMainDetailsItem title="Fat" unit={"g"}>
                {fat}
            </FoodMainDetailsItem>
        </div>
    );
}

export default FoodMainDetails;
