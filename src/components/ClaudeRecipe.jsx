import ReactMarkdown from 'react-markdown';


export default function ClaudeRecipe(props) {
    return (<section aria-live="polite" className='suggested-recipe-container'>
        <h2>AI Chef Recommends:</h2>
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>)
}