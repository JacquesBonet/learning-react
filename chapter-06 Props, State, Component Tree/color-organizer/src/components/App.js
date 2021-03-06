import React, {Component} from "react";
import {v4} from "uuid";
import AddColorForm from "./AddColorForm";
import ColorList from "./ColorList";
import "../../stylesheets/APP.css";

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            colors: []
        }
        this.addColor = this.addColor.bind(this)
        this.updateColor = this.updateColor.bind(this)
        this.removeColor = this.removeColor.bind(this)
    }

    addColor(title, rgb) {
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
        const {addColor, removeColor, updateColor} = this
        const {colors} = this.state
        return (
            <div className="app">
                <AddColorForm onNewColor={addColor}/>
                {(colors.length === 0) ?
                    <p>No Colors Listed. (Add a Color)</p> :
                    <ColorList colors={colors}
                               onUpdate={updateColor}
                               onRemove={removeColor}/>
                }
            </div>
        )
    }

}
