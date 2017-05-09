import React from 'react'
import PropTypes from 'prop-types'
import Color from './Color'
import '../../stylesheets/ColorList.css'

const ColorList = ({ colors=[], onRate=f=>f, onRemove=f=>f }) => {

    const items = colors.map(color =>
        <Color key={color.id}
                   {...color}
                   onRate={(rating) => onRate(color.id, rating)}
                   onRemove={() => onRemove(color.id)}/>
    )

    return (
        <div className="color-list">
            {items}
        </div>
    )
}

ColorList.propTypes = {
    colors: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
}

export default ColorList