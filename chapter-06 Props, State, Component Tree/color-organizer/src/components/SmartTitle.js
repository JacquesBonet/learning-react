import React, {Component} from 'react'
import PropTypes from 'prop-types'

class SmartTitle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            input: false,
            title: props.title
        }
    }

    onChangeTitle( e) {
        if (e.key === 'Enter') {
            this.setState({input: false})
            this.props.onChangeTitle(e.target.value)
        }
        else
            this.setState({title: e.target.value})
    }

    onClick() {
        this.setState( {input: true})
    }

    render() {
        const {input, title} = this.state

        return (
            <div className="smartTitle">
                {(input) ?
                    <input ref="title" type="text" defaultValue={title} required onKeyPress={(e) => this.onChangeTitle(e)}/> :
                    <div onClick={(e) => this.onClick(e)}>{title}</div>
                }
            </div>
        )
    }
}

SmartTitle.propTypes = {
    title: PropTypes.string.isRequired,
    onChangeTitle: PropTypes.func.isRequired
}

export default SmartTitle