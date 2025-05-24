import React from "react"
import CloudeRecipe from "./components/CloudeRecipe"
import IngredientsList from "./components/IngredientsList";
import {getRecipeFromMistral} from './ai'



export default function Home(){
    
    let[ingredientsList,addIngredients] = React.useState([])

    let[recipe,setRecipe] = React.useState("");
    const recipeSection = React.useRef(null)
    

    React.useEffect(() =>{
        if(recipe !=="" && recipeSection.current !==null){
            recipeSection.current.scrollIntoView()
        }

    },[recipe])
    
    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromMistral(ingredientsList)
        setRecipe(recipeMarkdown)

    }
  

    
    function onSubmit(formData){
        const newIngredient = formData.get("ingredient")
        addIngredients(prevState => [...prevState,newIngredient])
        
        
    }
    return(
        <main>
            <form action={onSubmit} className="add-ingredient-form">
                <input 
                type="text" 
                placeholder="e.g. oregano" 
                aria-label="Add ingredient" 
                name="ingredient"
                />
                <button >Add ingredient</button>
            </form>
            {ingredientsList.length > 0 && <IngredientsList getRecipe={getRecipe} ingredientsList={ingredientsList}/>}
            
            
            {recipe && <CloudeRecipe recipe={recipe}/> }
            
    
    
    
            
        </main>
        

    )
}