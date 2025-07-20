import React from 'react';

class FormattedDate extends React.Component{
    constructor(props) {
        super(props);
    }

    format(date) {
        const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        let parseDate = new Date(Date.parse(date));
        return parseDate.getDate() + "-" + months[parseDate.getMonth()] + "-" + parseDate.getFullYear();
    }

    render() {
        return(
            <span>{this.format(this.props.value)}</span>
        );
    }
}

export default FormattedDate;