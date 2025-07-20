import { combineReducers } from "redux"
import { apiReducer, buttonClickCountReducer, expenseReducer, loaderReducer, productReducer } from ".";

const rootReducer = combineReducers({
    expenses: expenseReducer,
    products: productReducer,
    count: buttonClickCountReducer,
    loaderStatus: loaderReducer,
    apiExpenses: apiReducer
});

export default rootReducer;