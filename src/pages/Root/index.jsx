import React, { useState } from "react";
import SearchBar from "../components/SearchBar";

function Root() {
    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center root-screen">
                <div className="container max-w-2xl">
                    <h1 className="text-center mb-10">Nutrition Facts</h1>
                    <SearchBar />
                </div>
            </div>
        </>
    );
}

export default Root;
