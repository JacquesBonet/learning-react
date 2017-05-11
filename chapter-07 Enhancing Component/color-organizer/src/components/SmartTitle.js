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

    componentWillUpdate(nextProps) {
 //       this.refs.title.style.backgroundColor = "red"
 //       this.refs.title.style.color = "white"
    }

    componentDidUpdate(prevProps) {
 //       this.refs.title.style.backgroundColor = ""
 //       this.refs.title.style.color = "black"
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
            <div ref="title" className="smartTitle">
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