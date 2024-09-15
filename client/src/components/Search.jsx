import React, { useState } from "react";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import { SearchResults } from "./SearchResult";
import { searchSymbol } from "../service/stock-api";

const Search = () => {
    const [input, setInput] = useState("");
    const [bestMatches, setBestMatches] = useState([]);
    const clear = () => {
        setInput("");
        setBestMatches([]);
    };

    const updateBestMatches = async () => {
        try {
            if (input) {
                const searchResults = await searchSymbol(input);
                const result = searchResults.result;
                setBestMatches(result);
            }
        } catch (error) {
            setBestMatches([]);
            console.log(error);
        }
    };

    return (
        <div className="flex items-center my-4 border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200">
            <input
                type="text"
                value={input}
                className="w-full px-4 py-2 focus:outline-none rounded-md"
                placeholder="Enter Search Stock.."
                onChange={(e) => {setInput(e.target.value); updateBestMatches()}}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        updateBestMatches();
                    }
                }}
            />
            {input && (
                <button onClick={clear}>
                    <XIcon className="h-4 w-4 fill-gray-500" />
                </button>
            )}
            <button
                onClick={updateBestMatches}
                className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2"
            >
                <SearchIcon className="h-4 w-4 fill-gray-100" />
            </button>
            {input && bestMatches.length > 0 ? (
                <SearchResults result={bestMatches} />
            ) : null}
        </div>
    );
};

export default Search;
