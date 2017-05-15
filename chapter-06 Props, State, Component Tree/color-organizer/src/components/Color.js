import React, {Component} from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import SmartTitle from './SmartTitle'


/**
 * Color Component
 *
 * @param id            Color sequence number
 * @param rating        Color rating
 * @param title         Color Title
 * @param onRemove      Notification to remove Color
 * @param onUpdate      Notification to updateColor
 * @constructor
 */
const Color = ({ id, rating = 0, title, onRemove = f => f, onUpdate = f => f}) =>
    <section>
        <SmartTitle title={title} onChangeTitle={title => onUpdate( id, {title})}/>
        <button onClick={() => onRemove(id)}>X</button>
        <div>
            <StarRating starsSelected={rating} onRate={ rating => onUpdate( id, {rating})}/>
        </div>
    </section>

Color.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onUpdate: PropTypes.func

}

export default Color
