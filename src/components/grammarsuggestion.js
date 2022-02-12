import React from "react";
import Spellingmistake from "./spellingmistake";

const Grammersuggestion=()=>{
    return(
        <div className="bg-white grammar-div px-2 py-4" style={{borderLeft:'2px solid #80808045'}}>
            <div>
                <p className="mb-3 pl-3 h5 text-color">Grammar Suggestion</p>
                <Spellingmistake></Spellingmistake>
                <Spellingmistake></Spellingmistake>
                <Spellingmistake></Spellingmistake>
            </div>
        </div>
    )
}
export default Grammersuggestion