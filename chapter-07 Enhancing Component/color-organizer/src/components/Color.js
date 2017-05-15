import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import SmartTitle from './SmartTitle'
import '../../stylesheets/Color.css'

class Color extends Component {

    componentWillMount() {
        this.style = { backgroundColor: "#CCC" }
    }

    shouldComponentUpdate(nextProps) {
        const { rating } = this.props
        return rating !== nextProps.rating
    }

    componentWillUpdate(nextProps) {
        const { title, rating } = this.props
        this.style = null
        alert(`${title}: rating ${rating} -> ${nextProps.rating}`)
    }

    componentDidUpdate(prevProps) {
        const status = (rating > prevProps.rating) ? 'better' : 'worse'
        console.log(`${title} is getting ${status}`)
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
        const { title, rgb, rating} = this.props
        return (
            <section className="color" style={this.style}>
                <SmartTitle title={title} onChangeTitle={title => this.changeTitle(title)}/>
                <button onClick={() => this.onRemove()}>X</button>
                <div className="color"
                     style={{ backgroundColor: rgb }}>
                </div>
                <div>
                    <StarRating starsSelected={rating} onRate={ rate => this.rateColor(rate)}/>
                </div>
            </section>
        )
    }

}

Color.propTypes = {
    title: PropTypes.string.isRequired,
    rgb: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onUpdate: PropTypes.func
}

Color.defaultProps = {
    rating: 0,
    onRemove: f=>f,
    onRate: f=>f
}

export default Color


