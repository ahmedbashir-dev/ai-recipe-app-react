export default function Main() {
    return(
        <main className="container">
            <form className="add-ingredient-form">
                <input 
                    aria-label="Add Ingredient" 
                    type="text" 
                    placeholder="Add Ingredient"
                    name="ingredient" 
                    id="ingredient" />
                <button>Add Ingredient</button>
            </form>
        </main>
    )
}