import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";

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

    const ingredientElements = ingredients?.map((ingredirent, index) => (
        <li key={index}>{ingredirent}</li>
    ));

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
            {ingredients?.length > 0 && <section className="ingredients-section">
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients">
                    {ingredientElements}
                </ul>
                {ingredients?.length > 3 && <div className="cta-section">
                    <div className="cta-information">
                        <h2>Ready for a recipe?</h2>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={getRecipe} className="cta-button">Get a recipe</button>
                </div>}

                {recipeShown && <ClaudeRecipe />}
            </section>}


        </main>
    )
}