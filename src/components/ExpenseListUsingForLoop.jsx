import React from 'react';
import './ExpenseEntryItemListAPICss.css'

export class ExpenseListUsingForLoop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expenses: this.props["expenses"]
        };

        this.removeFirstItem = this.removeFirstItem.bind(this)
    }

    getTotalExpense() {
        var items = this.state.expenses;
        var total = 0;
        for(let i = 0; i < items.length; i++) {
            total += parseInt(items[i].amount);
        }
        return total;
    }

    removeFirstItem() {
        var itemToRemove = this.state['expenses'][0]
        this.setState((previousState) => ({
            expenses: previousState['expenses'].filter((item) => item !== itemToRemove)
        }))
    }

    render() {
        let lists = [];
        lists = this.state.expenses.map( (item, idx) => {
            return <tr key={item.id}><td>item {idx + 1}</td><td>{item.amount}<input /></td></tr>;
        });
        // let total = this.getTotalExpense();
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lists}
                        <tr>
                            <td>Sum</td>
                            <td>{this.getTotalExpense()}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button onClick={this.removeFirstItem}>Remove First Item</button>
                </div>
            </div>
        );
    }
}