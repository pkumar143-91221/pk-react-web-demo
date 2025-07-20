import React, {useEffect, useState} from 'react';
import './ExpenseForm.css'
import { connect, useDispatch } from 'react-redux';
import { addExpense, updateExpense} from '../actions/index';
import { useLocation, useNavigate } from 'react-router-dom';
import { hideLoader, showLoader } from '../actions/index1';

function ExpenseFormFn(props) {
   const dispatch = useDispatch();
   const [input, setInput] = useState({
      id: "",
      name: "",
      amount: "",
      spendDate: "",
      category: ""
   })

   function inputHandler(e) {
      const { name, value } = e.target;
      setInput((prevState) => ({
         ...prevState,
         [name]: value,
      }));
   }

   const navigate = useNavigate();
   const location = useLocation();
   const data = location?.state ;
   useEffect(() => {
      if (data) {
         setInput(data);
      }
   }, [data]);
   
   const dateChangeHandler = (e) => {
      setInput((prevState) => ({
         ...prevState,
         ...{spendDate: e.target.value},
      }));
   }

   function onSubmit(e) {
      e.preventDefault();
      console.log("Input ::>", input);
      dispatch(showLoader())
      props.onUpdateExpense({
         id: input.id, 
         name: input.name, 
         amount: parseFloat(input.amount), 
         spendDate: input.spendDate, 
         category: input.category
      });
      setTimeout(() => {
         dispatch(hideLoader())
         navigate("/expense-list");
      }, 1000)
   }
   
   return (
      <div id="expenseForm">
         <form onSubmit={(e) => onSubmit(e)}>
            <input type='hidden' value={input.id} />
         <label htmlFor="name">Title</label>
         <input type="text" id="name" name="name" placeholder="Enter expense title" 
            value={input.name}
            onChange={inputHandler} />

         <label htmlFor="amount">Amount</label>
         <input type="number" id="amount" name="amount" placeholder="Enter expense amount"
            value={input.amount}
            onChange={inputHandler} />

         <label htmlFor="date">Spend Date</label>
         <input type="date" id="date" name="date" placeholder="Enter date" 
            value={input.spendDate} onChange={dateChangeHandler}/>

         <label htmlFor="category">Category</label>
         <select id="category" name="category"
            value={input.category}
            onChange={inputHandler} >
            <option value="">Select</option>
            <option value="Food">Food</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Academic">Academic</option>
         </select>
         
            <input type="submit" value={!input.id ? "Submit" : "Update"} />
         </form>
      </div>
   )
}
const mapDispatchToProps = dispatch => {
   return {
      onUpdateExpense: expense => {
         dispatch(updateExpense(expense));
      }
   };
};
export default connect(
   null,
   mapDispatchToProps
)(ExpenseFormFn);