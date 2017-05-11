import React from 'react'
import PropTypes from 'prop-types'
import Color from './Color'
import '../../stylesheets/ColorList.css'

const ColorList = ({colors = [], onRemove = f => f, onUpdate = f => f}) => {

    const items = colors.map(color =>
        <Color key={color.id}
                   {...color}
                   onUpdate={onUpdate}
                   onRemove={onRemove}/>
    )

    return (
        <div className="color-list">
            {items}
        </div>
    )
}

    ColorList.propTypes = {
        colors: PropTypes.array,
        onUpdate: PropTypes.func,
        onRemove: PropTypes.func
    }

export default ColorList