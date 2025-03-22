import { useState } from "react";

export default function Main() {
    const [ingredients, setIngredients] = useState(['Oregano', 'Basil', 'Thyme', 'Parsley', 'Rosemary']);

    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient');
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
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
                <ul className="ingredients">
                    {ingredients?.map((ingredirent, index) => (
                        <li key={index}>{ingredirent}</li>
                    ))}
                </ul>
            </section>
        </main>
    )
}