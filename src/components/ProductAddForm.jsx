import React from 'react';
import './ExpenseForm.css'
import { connect } from 'react-redux';
import { addProduct} from '../actions/index1';
import withNavigation from './withNavigation';

class ProductAdd extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         product: {}
      }
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleAmountChange = this.handleAmountChange.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);
      this.handleCategoryChange = this.handleCategoryChange.bind(this);
   }

   handleNameChange(e) {
      this.setState( (state, props) => {
         let product = state.product
         product.name = e.target.value;
         return { product: product }
      });
   }
   handleAmountChange(e) {
      this.setState( (state, props) => {
         let product = state.product
         product.amount = e.target.value;
         return { product: product }
      });
   }
   handleDateChange(e) {
      this.setState( (state, props) => {
         let product = state.product
         product.date = e.target.value;
         return { product: product }
      });
   }
   handleCategoryChange(e) {
      this.setState( (state, props) => {
         let product = state.product
         product.category = e.target.value;
         return { product: product }
      });
   }
   onSubmit = (e) => {
      e.preventDefault();
      let item = this.state.product;
      console.log("Product item ::>", item);
      this.props.onAddProduct({name: item.name, amount: parseFloat(item.amount), "spendDate": item.date, category: item.category});
      // this.props.addExpense({name: item.name, amount: item.amount, "spendDate": item.date, category: item.category});
      this.setState({
        item: {
            name: "",
            amount: "",
            category: "",
            date: ""
        }
      });
      this.props.navigate('/product-list');
   }
   render() {
      return (
         <div id="expenseForm">
           <form onSubmit={(e) => this.onSubmit(e)}>
            <label htmlFor="name">Title</label>
            <input type="text" id="name" name="name" placeholder="Enter expense title" 
               value={this.state.product.name}
               onChange={this.handleNameChange} />

            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" name="amount" placeholder="Enter expense amount"
               value={this.state.product.amount}
               onChange={this.handleAmountChange} />

            <label htmlFor="date">Spend Date</label>
            <input type="date" id="date" name="date" placeholder="Enter date" 
               value={this.state.product.date}
               onChange={this.handleDateChange} />

            <label htmlFor="category">Category</label>
            <select id="category" name="category"
               value={this.state.product.category}
               onChange={this.handleCategoryChange} >
              <option value="">Select</option>
              <option value="Food">Food</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Academic">Academic</option>
            </select>
           
            <input type="submit" value="Submit" />
           </form>
         </div>
      )
   }
}

const mapDispatchToProps = dispatch => {
   return {
      onAddProduct: product => {
         dispatch(addProduct(product));
      }
   };
};
export default connect(
   null,
   mapDispatchToProps
)(withNavigation(ProductAdd));