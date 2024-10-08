import React, { useContext } from "react"
import StockContext from "../Context/StockContext"

export const SearchResults=({result})=>{
    const {setStockSymbol} = useContext(StockContext);
    return <ul className="absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll bg-white border-neutral-200 custom-scrollbar">
        {result.map((item)=>{
            return <li key={item.symbol} className="cursor-pointer p-4 m-2 flex items-center justify-between rounded-md hover:bg-indigo-200"
            onClick={() => {
                setStockSymbol(item.symbol);
            }}
            >
                <span>{item.symbol}</span>
                <span>{item.description}</span>
            </li>
        })}
    </ul>
}