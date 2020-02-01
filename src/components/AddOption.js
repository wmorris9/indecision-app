import React from 'react'

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    handleAddOption = (e) => {
        e.preventDefault()

        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)

        if (error) {
            this.setState(() => ({ error }))
        } else {
            this.setState(() => ({ error: undefined }))
        }
        if(!error) {
            e.target.elements.option.value = ''
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option" autoComplete="off" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}