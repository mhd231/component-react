class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your Life in the hands of the computer';
        const options = ['Thing One', 'Thing Two', 'Thing Four'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOptions />
            </div>
        )
    }
}



class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>

        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('test')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What Should I do</button> &nbsp;
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        console.log(this.props.options)
        // alert('remove')
    }
    render() {
        return (
            <div>
                <br />
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOptions extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if (option) {
            alert(option);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOptions />
    </div>
)

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
