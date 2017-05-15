import React from 'react'
import PropTypes  from 'prop-types'
import '../../stylesheets/AddColorForm.css'

const AddColorForm = ({onNewColor=f=>f}) => {

    let _title, _rgb

    const submit = e => {
        e.preventDefault()
        onNewColor(_title.value, _rgb.value)
        _title.value = ''
        _rgb.value = '#000000'
        _title.focus()
    }

    return (
        <form className="add-color" onSubmit={submit}>
            <input ref={input => _title = input}
                   type="text"
                   placeholder="color title..." required/>
            <input ref={input => _rgb = input}
                   type="color" required/>
            <button>ADD</button>
        </form>
    )

}

AddColorForm.propTypes = {
    onNewColor: PropTypes.func
}

export default AddColorForm