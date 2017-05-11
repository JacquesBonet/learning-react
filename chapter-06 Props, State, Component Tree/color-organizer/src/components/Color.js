import React from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import SmartTitle from './SmartTitle'

const Color = ({ title, color, rating=0, onRemove=f=>f, onRate=f=>f, onChangeTitle=f=>f}) =>
    <section>
        <SmartTitle title={title} onChangeTitle={onChangeTitle}/>
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


