console.log('App.js is running!');
const appRoot = document.getElementById('app')

// JSX - JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        render()
    }
}

const clearAll = () => {
    app.options = []
    render()
}

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNumber]
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? <p>Here are your options.</p> : <p>You don't have any options</p>}
            <ol>
            {
                app.options.map((option) => <li key={option}>Option: {option}</li>)
            }
            </ol>
            <button disabled={app.options.length ===0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={clearAll}>Remove All</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    )

    ReactDOM.render(template, appRoot)
}

render()