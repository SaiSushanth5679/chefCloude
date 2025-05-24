import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'

export default function CloudeRecipe(props){
    return(
    <section className='suggested-recipe-container' aria-live='polite'>
        <h2>Chef Cloude Recommends:</h2>
        <ReactMarkdown>
            {props.recipe}

        </ReactMarkdown>
        
    </section>
    )
}