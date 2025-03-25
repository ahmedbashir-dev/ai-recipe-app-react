export default function IngredientsList({ ingredients, getRecipe,ref }) {
  
    const ingredientElements = ingredients?.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ));
    return (
        <section >
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients">
                    {ingredientElements}
                </ul>
                {ingredients?.length > 3 && <div ref={ref} className="cta-section">
                    <div className="cta-information">
                        <h2>Ready for a recipe?</h2>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={getRecipe} className="cta-button">Get a recipe</button>
                </div>}

            </section>
    )
}