import React from "react";
import Recipe from "./Recipe";
import "../../stylesheets/Menu.css";

const Recipes = ({recipes}) =>
    <article>
        <header>
            <h1>Delicious Recipes</h1>
        </header>
        <div className="recipes">
            {
                recipes.map((recipe, i) =>
                    <Recipe key={i} {...recipe} />)
            }
        </div>
    </article>

Recipes.displayName = 'Menu'

export default Recipes
