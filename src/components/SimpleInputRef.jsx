import React from 'react'

class SimpleInputRef extends React.Component {
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

export default SimpleInputRef;
