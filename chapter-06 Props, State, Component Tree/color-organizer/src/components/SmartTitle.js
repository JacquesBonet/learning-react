import React, {Component} from 'react'
import PropTypes from 'prop-types'

class SmartTitle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modInput: false,
            title: props.title
        }
    }

    onChangeTitle( e) {
        if (e.key === 'Enter') {
            this.setState({modInput: false, title: e.target.value})
            this.props.onChangeTitle(e.target.value)
        }
        else
            this.setState({title: e.target.value})
    }

    onClick() {
        this.setState( {modInput: true})
    }

    render() {
        const {modInput, title} = this.state

        return (
            <div className="smartTitle">
                {(modInput) ?
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