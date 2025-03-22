import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../../ai";

export default function Main() {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState("");
    const [isRecipeLoading, setIsRecipeLoading] = useState(false);


    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient');
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }

    async function getRecipe(){
        setIsRecipeLoading(true);
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown);
        setIsRecipeLoading(false);
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
            {isRecipeLoading ? <div className="loader"> </div> : recipe && <ClaudeRecipe recipe={recipe} />}
            </section>


        </main>
    )
}