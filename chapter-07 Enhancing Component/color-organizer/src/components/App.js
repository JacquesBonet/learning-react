import React, { Component } from 'react'
import { v4 } from 'uuid'
import AddColorForm from './AddColorForm'
import ColorList from './ColorList'
import '../../stylesheets/APP.css'

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            colors: [
                {
                    "id": "8658c1d0-9eda-4a90-95e1-8001e8eb6036",
                    "title": "Ocean Blue",
                    "rgb": "#0070ff",
                    "rating": 3
                },
                {
                    "id": "f9005b4e-975e-433d-a646-79df172e1dbb",
                    "title": "Tomato",
                    "rgb": "#d10012",
                    "rating": 2
                },
                {
                    "id": "58d9caee-6ea6-4d7b-9984-65b145031979",
                    "title": "Lawn",
                    "rgb": "#67bf4f",
                    "rating": 1
                },
                {
                    "id": "a5685c39-6bdc-4727-9188-6c9a00bf7f95",
                    "title": "Party Pink",
                    "rgb": "#ff00f7",
                    "rating": 5
                }
            ]
        }
        this.addColor = this.addColor.bind(this)
        this.rateColor = this.rateColor.bind(this)
        this.removeColor = this.removeColor.bind(this)
    }

    addColor({title, rgb}) {
        const colors = [
            ...this.state.colors,
            {
                id: v4(),
                title,
                rgb,
                rating: 0
            }
        ]
        this.setState({colors})
    }


    rateColor(id, rating) {
        this.updateColor( id, {rating})
    }

    updateColor(id, newColor) {
        const colors = this.state.colors.map(color =>
            (color.id !== id) ?
                color :
                {
                    ...color,
                    ...newColor
                }
        )
        this.setState({colors})
    }

    removeColor(id) {
        const colors = this.state.colors.filter(color => color.id !== id)
        this.setState({colors})
    }

    render() {
        const { addColor, rateColor, removeColor } = this
        const { colors } = this.state
        return (
            <div className="app">
                <AddColorForm onNewColor={addColor}/>
                {(colors.length === 0) ?
                    <p>No Colors Listed. (Add a Color)</p> :
                    <ColorList colors={colors}
                               onRate={rateColor}
                               onRemove={removeColor}/>
                }
            </div>
        )
    }

}
