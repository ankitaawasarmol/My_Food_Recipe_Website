import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./MealItem";
import Navbar2 from "./Navbar2";
import ReacipeIndex from "./RecipeIndex";
const Meal = () => {
    const [search,setSearch]=useState();
    const [show,setShow]=useState(false);
    const [item,setItem]=useState("");
    const [url,setUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
   
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=> {
            setItem(data.meals);
            setShow(true);
        })
     },[url])

     const searchRecipe=(evt)=>{
       
         setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        
    }
    const setIndex=(alpha)=>{
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
    }
return (
    <>
        <Navbar2/>
        <div className="main">
            <div className="headingmeal">
                <h1>Search Your Food Recipe</h1>
                
            </div>
            <div className="searchBox">
                <input type="search" className="search-bar" placeholder="Search here ..." onChange={e=> setSearch(e.target.value)} onKeyPress={searchRecipe}/>
            </div>
            <div className="container">
                {
                    show ?<MealItem data={item} /> :"Not Found"
                
                }
            </div>
           
            <div className="foodalpha">
                <h4>Search food recipe by first alphabet... </h4>
            </div>
            <div className="indexContainer">
                 <ReacipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div>
            
        </div>
    </>
)
}
export default Meal;