import React from 'react'

export default class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" autoComplete="off" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}