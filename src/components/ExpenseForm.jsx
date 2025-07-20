import React from 'react';
import './ExpenseForm.css'
import { connect } from 'react-redux';
import { addApiExpense, updateApiExpense } from '../actions/index';
import withNavigation from './withNavigation';

import {format} from 'date-fns';

class ExpenseForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         item: {}
      }
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleAmountChange = this.handleAmountChange.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);
      this.handleCategoryChange = this.handleCategoryChange.bind(this);
      if (this.props.location?.state) {
         this.state.item = this.props.location?.state;
         this.state.item.spend_date = format(new Date(this.state.item.spend_date), "yyyy-MM-dd");
      }
   }

   handleNameChange(e) {
      this.setState((state, props) => {
         let item = state.item
         item.name = e.target.value;
         return { item: item }
      });
   }
   handleAmountChange(e) {
      this.setState((state, props) => {
         let item = state.item
         item.amount = e.target.value;
         return { item: item }
      });
   }
   handleDateChange(e) {
      this.setState((state, props) => {
         let item = state.item
         item.spend_date = e.target.value;
         return { item: item }
      });
   }
   handleCategoryChange(e) {
      this.setState((state, props) => {
         let item = state.item
         item.category = e.target.value;
         return { item: item }
      });
   }
   onSubmit = (e) => {
      e.preventDefault();
      let item = this.state.item;
      if (!item?._id) {
         this.props.onAddExpense({
            name: item.name,
            amount: parseFloat(item.amount),
            spend_date: item.spend_date,
            category: item.category
         });
      } else {
         this.props.onUpdateExpense({
            id: item._id,
            name: item.name,
            amount: parseFloat(item.amount),
            spend_date: item.spend_date,
            category: item.category
         })
      }
      this.props.navigate('/expense-api');
   }
   render() {
      return (
         <div id="expenseForm">
            <form onSubmit={(e) => this.onSubmit(e)}>
               <input type='hidden' value={this.state.item?._id} />
               <label htmlFor="name">Title</label>
               <input type="text" id="name" name="name" placeholder="Enter expense title"
                  value={this.state.item.name}
                  onChange={this.handleNameChange} />

               <label htmlFor="amount">Amount</label>
               <input type="number" id="amount" name="amount" placeholder="Enter expense amount"
                  value={this.state.item.amount}
                  onChange={this.handleAmountChange} />

               <label htmlFor="date">Spend Date</label>
               <input type="date" id="date" name="spend_date" placeholder="Enter date"
                  value={this.state.item.spend_date}
                  onChange={this.handleDateChange} />

               <label htmlFor="category">Category</label>
               <select id="category" name="category"
                  value={this.state.item.category}
                  onChange={this.handleCategoryChange} >
                  <option value="">Select</option>
                  <option value="Food">Food</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Academic">Academic</option>
                  <option value="Gadgets">Gadgets</option>
                  <option value="Cloth">Cloth</option>
               </select>

               <input type="submit" value={!this.state.item?._id ? "Submit" : "Update"} />
            </form>
         </div>
      )
   }
}
const mapDispatchToProps = dispatch => {
   return {
      onAddExpense: expense => {
         dispatch(addApiExpense(expense));
      },
      onUpdateExpense: expense => {
         dispatch(updateApiExpense(expense));
      }
   };
};
export default connect(
   null,
   mapDispatchToProps
)(withNavigation(ExpenseForm));