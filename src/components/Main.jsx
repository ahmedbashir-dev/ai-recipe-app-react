export default function Main() {
    const ingredients = ['Oregano', 'Basil', 'Thyme', 'Parsley', 'Rosemary'];

    function handleSubmit(event){
        event.preventDefault();
        console.log("Form Submitted");
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get('ingredient');
        console.log(newIngredient);
        ingredients.push(newIngredient);
        console.log(ingredients);
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