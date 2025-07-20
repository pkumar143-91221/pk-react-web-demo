import React from 'react';
import { connect } from 'react-redux';
import './ExpenseEntryItemListAPICss.css';
import { addProduct, deleteProduct } from '../actions/index1';

import FormattedMoney from "./FormattedMoney";
import FormattedDate from "./FormattedDate";

class ProductList extends React.Component {
    constructor(props) {
        super(props);

        if (this.props.products.length === 0){
         const items = [
            { id: 1, name: "Product", amount: 80, spendDate: "2020-10-10", category: "Food" },
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
         items.forEach((item) => {
            this.props.onAddProduct(
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

   handleMouseEnter(e) {
      // console.log("Mouse enter ::>", e.target.innerHTML);
      e.target.parentNode.classList.add('highlight');
   }

   handleMouseLeave(e) {
      e.target.parentNode.classList.remove('highlight');
   }

    getTotal() {
      let total = 0;
      for(let i=0; i<this.props.products.length; i++) {
         total += parseFloat(this.props.products[i].amount)
      }
      return <FormattedMoney value={total} />
    }

    handleDelete(id, e) {
      e.preventDefault();
      this.props.onDelete(id)
    }

    render() {
        const lists = this.props.products.map((item) =>
         <tr key={item.id} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <td>{item.name}</td>
            <td><FormattedMoney value={item.amount} /></td>
            <td><FormattedDate value={item.spendDate} /></td>
            <td>{item.category}</td>
            <td><a href="#" onClick={(e) => this.handleDelete(item.id, e)}>Remove</a></td>
         </tr>
      );
        return (<div>
            <table>
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Price</th>
                     <th>Date Added</th>
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
      products: state.products
   };
};
const mapDispatchToProps = dispatch => {
   return {
      onAddProduct: product => {
         dispatch(addProduct(product));
      },
      onDelete: id => {
         dispatch(deleteProduct(id));
      }
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);