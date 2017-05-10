import React from 'react'
import { render } from 'react-dom'
import Recipes from './components/Recipes'
import data from '../data/recipes'

render(
    <Recipes donnees={data} />,
    document.getElementById("react-container")
)