import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if(options) {
                this.setState(() => ({ options: options }))
            }
        } catch (e) { 

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            console.log('saving data')
        }
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({ options: prevState.options.filter((option) => option !== optionToRemove) }))
    }
    handlePick() {
        alert(this.state.options[Math.floor(Math.random() * this.state.options.length)])
    }
    handleAddOption(option) {
        if (!option) {
            return alert('Enter valid value to add item!')
        } else if (this.state.options.indexOf(option) > -1) {
            return alert('This option already exists')
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer!'

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}

export default IndecisionApp