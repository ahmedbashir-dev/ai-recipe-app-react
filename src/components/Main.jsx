import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main() {
    const [ingredients, setIngredients] = useState([]);
    const [recipeShown, setRecipeShown] = useState(false);


    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient');
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }

    function getRecipe(){
        setRecipeShown(prevRecipeShown => !prevRecipeShown);
    }


    return (
        <main className="container">
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    aria-label="Add Ingredient"
                    type="text"
                    placeholder="Add Ingredient"
                    name="ingredient"
                    id="ingredient" />
                <button>Add Ingredient</button>
            </form>
            <section className="ingredients-section">
            {ingredients?.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />}
            {recipeShown && <ClaudeRecipe />}
            </section>


        </main>
    )
}