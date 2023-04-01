import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
import SimplePageHeader from "../components/SimplePageHeader";
import FoodMainDetails from "./components/FoodMainDetails";
import SearchBar from "../components/SearchBar";
import FoodServingSize from "./components/FoodServingSize";
import FoodDetails from "./components/FoodDetails";
import capitalize from "../../helpers/capitalize";

function SingleFood() {
    const { slug } = useParams();
    const { data, isLoading } = useSearch(slug);
    const searchRef = useRef();

    useEffect(() => {
        if (isLoading) {
            document.title = "Loading...";
        } else {
            document.title = data?.name ? capitalize(data?.name) : "Not Found";
        }
    }, [isLoading, data]);

    if (!isLoading && !data?.name) {
        return (
            <div className="container max-w-lg py-10">
                <SearchBar />
                <SimplePageHeader>Not Found</SimplePageHeader>
            </div>
        );
    }

    return (
        <div className="container max-w-lg  py-10">
            <SearchBar searchRef={searchRef} slug={slug} />
            <>
                <SimplePageHeader>{data?.name}</SimplePageHeader>
                <FoodServingSize size={data?.serving_size_g} />
                <FoodMainDetails
                    calories={data?.calories}
                    protein={data?.protein_g}
                    carbs={data?.carbohydrates_total_g}
                    fat={data?.fat_total_g}
                />
                <FoodDetails data={data} />
            </>
        </div>
    );
}

export default SingleFood;
