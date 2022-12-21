import React from "react";
import { useContent } from "../hooks";

export default function Browse(){
    const {series} =useContent('series');
    const {films} =useContent('films');
    
    return(
        <>

            {/* we need the series and fields
                we need slides
                pass it to the browse container */}
            <p>Hi I am Deep</p>
        </>
    )
}