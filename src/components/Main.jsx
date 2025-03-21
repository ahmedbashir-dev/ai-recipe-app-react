import { useState } from "react";

export default function Main() {
    const [ingredients, setIngredients] = useState(['Oregano', 'Basil', 'Thyme', 'Parsley', 'Rosemary']);

    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get('ingredient');
        setIngredients((prevIngredients)=>[...prevIngredients, newIngredient]);
    }

    return(
        <main className="container">
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    aria-label="Add Ingredient" 
                    type="text" 
                    placeholder="Add Ingredient"
                    name="ingredient" 
                    id="ingredient" />
                <button>Add Ingredient</button>
            </form>
            <ul className="ingredients">
                {ingredients?.map((ingredirent, index)=>(
                    <li key={index}>{ingredirent}</li>
                ))}
            </ul>
        </main>
    )
}