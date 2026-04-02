import React, { useContext } from "react";
import { MyContext } from "../hooks/context";
export const pointer_=()=>{
    
    return(
        <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-50">
            <div className="pointer-events-none absolute top-0 left-0 w-6 h-6 bg-gray-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
    )
}