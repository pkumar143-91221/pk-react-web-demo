import React from 'react';

export class SimpleInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(e) {
        console.log("Value ::>", e.target.value);
        this.setState({
            username: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        alert(this.state.username);
        this.setState({
            username: ""
        })
    }

    render() {
        return(
            <div>
                <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
                <input type="submit" onClick={this.handleSubmit} value="Submit"/>
            </div>
        );
    }

}

export class SimpleInputRef1 extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        alert(this.inputRef.current.value);
    }

    render() {
        return(
            <div>
                <input type='text' ref={this.inputRef} name="username" defaultValue=""/>
                <input type='button' value="Submit" onClick={this.handleSubmit} />
            </div>
            
        );
    }
}


// export default SimpleInput;
// export {SimpleInputRef1};