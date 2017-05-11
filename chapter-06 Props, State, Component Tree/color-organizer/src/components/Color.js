import React, {Component} from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import SmartTitle from './SmartTitle'


class Color extends Component {

    constructor(props) {
        super(props)
    }

    rateColor(rating) {
        this.props.onUpdate( this.props.id, {rating})
    }

    changeTitle(title) {
        this.props.onUpdate( this.props.id, {title})
    }

    onRemove() {
        this.props.onRemove( this.props.id)
    }

    render() {
        const {title, rating} = this.props

        return (
            <section>
                <SmartTitle title={title} onChangeTitle={title => this.changeTitle(title)}/>
                <button onClick={() => this.onRemove()}>X</button>
                <div>
                    <StarRating starsSelected={rating} onRate={ rate => this.rateColor(rate)}/>
                </div>
            </section>
        )
    }
}

Color.propTypes = {
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onUpdate: PropTypes.func

}

export default Color

