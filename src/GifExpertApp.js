import React, { useState } from "react";  

import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

function GifExpertApp() {
    //const categories = ['Naruto','Dragon Ball']
    const [categories,setCategories] = useState(['Dragon ball']);

    /* const handleAdd = ()=>{
        const name = 'PON'
        setCategories([...categories,name]);
    }
 */
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map( category => <GifGrid key={category} category={ category}/>)


                }    
                
            
            </ol> 
        </>

    )
    
}
export default GifExpertApp;