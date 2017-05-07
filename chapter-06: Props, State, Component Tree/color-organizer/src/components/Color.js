import React from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'

const Color = ({ title, color, rating=0, onRemove=f=>f, onRate=f=>f}) =>
    <section>
        <h1>{title}</h1>
        <button onClick={onRemove}>X</button>
        <div>
            <StarRating starsSelected={rating} onRate={onRate}/>
        </div>
    </section>

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
}

export default Color


