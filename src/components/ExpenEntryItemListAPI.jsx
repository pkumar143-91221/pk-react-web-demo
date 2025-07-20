import React from 'react';
import './ExpenseEntryItemListAPICss.css';
import { connect } from 'react-redux'
import { deleteApiExpense, fetchApiExpenses } from '../actions';
import {Link} from 'react-router-dom'
class ExpenseEntryItemListAPI extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDelete = (id, e) => { 
        e.preventDefault(); 
        console.log(id);
        this.props.onDelete(id);
    }

    componentDidMount() { 
        if (this.props.expenses.items?.length === 0) {
            this.props.onFetchList();
        }
    }

    handleMouseEnter(e) {
        e.target.parentNode.classList.add('highlight');
    }

    handleMouseLeave(e) {
        e.target.parentNode.classList.remove('highlight');
    }

    render() {
        let lists = [];
        if (this.props.expenses.isLoaded) {
            lists = this.props.expenses.items.map((item) =>
                <tr key={item._id}  onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    <td>{item.name}</td>
                    <td>{item.amount}</td>
                    <td>{new Date(item.spend_date).toDateString()}</td>
                    <td>{item.category}</td>
                    <td>
                        <Link onClick={(e) => this.handleDelete(item._id, e)}>Remove</Link>
                        &nbsp;&nbsp;
                        <Link to={{ pathname: '/expense-form'}} state={item}>
                            Edit
                        </Link>
                    </td>
                </tr>
            );
        } else {
            lists = [<tr key="asdfa">
                <td colSpan={5}>{this.props.expenses.message}</td>
            </tr>]
        }
        return (
            <div>
                <table onMouseOver={this.handleMouseOver}>
                    <thead>
                    <tr>
                        <th>Item</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                        {lists}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        expenses: state.apiExpenses
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchList: () => {
            dispatch(fetchApiExpenses())
        },
        onDelete: (id) => {
            dispatch(deleteApiExpense(id))
        }
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseEntryItemListAPI);