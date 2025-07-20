import React from 'react';
import { connect } from 'react-redux';
import './ExpenseEntryItemListAPICss.css';
import { deleteExpense } from '../actions';
import { addExpense } from '../actions';

import FormattedMoney from "./FormattedMoney";
import FormattedDate from "./FormattedDate";
import { Link, useNavigate } from 'react-router-dom';
import withNavigation from './withNavigation';

class ExpenseEntryItemList extends React.Component {
   constructor(props) {
      super(props);

      if (this.props.expenses.length === 0){
         const items = [
            { id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food" },
            // { id: 2, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category: "Food" },
            // { id: 3, name: "Cinema", amount: 210, spendDate: "2020-10-16", category: "Entertainment" },
            // { id: 4, name: "Java Programming book", amount: 242, spendDate: "2020-10-15", category: "Academic" },
            // { id: 5, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category: "Food" },
            // { id: 6, name: "Dress", amount: 2000, spendDate: "2020-10-25", category: "Cloth" },
            // { id: 7, name: "Tour", amount: 2555, spendDate: "2020-10-29", category: "Entertainment" },
            // { id: 8, name: "Meals", amount: 300, spendDate: "2020-10-30", category: "Food" },
            // { id: 9, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category: "Gadgets" },
            // { id: 10, name: "Exam Fees", amount: 1245, spendDate: "2020-11-04", category: "Academic" }
         ]
         console.log("Called Constructor");
         items.forEach((item) => {
            this.props.onAddExpense(
               { 
                  name: item.name, 
                  amount: item.amount, 
                  spendDate: item.spendDate, 
                  category: item.category 
               }
            );
         })
      }
   }

   componentDidMount() {
    console.log("Componenet did mount");
   }

   handleMouseEnter(e) {
      // console.log("Mouse enter ::>", e.target.innerHTML);
      e.target.parentNode.classList.add('highlight');
   }

   handleMouseLeave(e) {
      e.target.parentNode.classList.remove('highlight');
   }

   handleDelete = (id,e) => {
      e.preventDefault();
      this.props.onDelete(id);
   }

   edit = (data) => {
      this.props.navigate("/expense-form")
   }

   getTotal() {
      let total = 0;
      for (var i = 0; i < this.props.expenses.length; i++) {
         total += parseFloat(this.props.expenses[i].amount)
      }
      return <FormattedMoney value={total} />
   }

   render() {
      const lists = this.props.expenses.map((item) =>
         <tr key={item.id} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <td>{item.name}</td>
            <td><FormattedMoney value={item.amount} /></td>
            <td><FormattedDate value={item.spendDate} /></td>
            <td>{item.category}</td>
            <td>
               <button onClick={(e) => this.handleDelete(item.id, e)}>Remove</button>
               {/* <button onClick={(e) => this.edit(item)}>Edit</button> */}
               <Link to={{ pathname: '/expense-form-fn'}} state={item}>
                  Edit
               </Link>
            </td>
         </tr>
      );
      return (
         <div>
            <table>
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
                  <tr>
                     <td colSpan="1" style={{ textAlign: "right" }}>Total Amount</td>
                     <td colSpan="4" style={{ textAlign: "left" }}>
                        {this.getTotal()}
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      );
   }
}
const mapStateToProps = state => {
   return {
      expenses: state.expenses
   };
};
const mapDispatchToProps = dispatch => {
   return {
      onAddExpense: expense => {
         dispatch(addExpense(expense));
      },
      onDelete: id => {
         dispatch(deleteExpense(id));
      }
   };
};
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(withNavigation(ExpenseEntryItemList));