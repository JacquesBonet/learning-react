import React from 'react'
import IngredientsList from './IngredientsList'
import Difficulty from './Difficulty'
import Instructions from './Instructions'
import Header from './Header'

const Recipe = ({ name, ingredients, steps, difficulte}) =>
    <section id={name.toLowerCase().replace(/ /g, '-')}>
        <Header>
            <h1>{name}</h1>
            <IngredientsList list={ingredients}/>
        </Header>
        <Difficulty difficulte={difficulte}/>
        <Instructions title="Cooking Instructions"
                      steps={steps}/>
    </section>

Recipe.displayName = 'Recipe'

export default Recipe
