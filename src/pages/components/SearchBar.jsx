import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";

function SearchBar({ searchRef = false, slug: slugProp = "" }) {
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    const handleSearching = (e) => {
        e.preventDefault();

        const slug = slugify(searchTerm);

        navigate(`/food/${slug}`);
    };

    useEffect(() => {
        searchRef?.current?.focus();
        setSearchTerm("");
    }, [slugProp]);

    return (
        <form
            onSubmit={handleSearching}
            className="border border-slate-300 flex rounded-full overflow-hidden mb-10 w-full"
        >
            <input
                type="text"
                className="w-full py-4 px-6"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                ref={searchRef || null}
                required
            />
            <input
                type="submit"
                value="Search"
                className="flex-shrink-0 px-6 bg-slate-200 font-semibold text-slate-900"
            />
        </form>
    );
}

export default SearchBar;
