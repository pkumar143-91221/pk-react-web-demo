import { ADD_API_EXPENSE, ADD_EXPENSE,
    ADD_PRODUCT,
    COUNT_CLICK,
    DELETE_EXPENSE,
    DELETE_PRODUCT,
    FETCH_API_EXPENSES,
    FETCH_API_EXPENSES_FAILURE,
    HIDE_LOADER,
    SHOW_LOADER,
    UPDATE_API_EXPENSES_RECORD,
    UPDATE_EXPENSE } from "../actions/types";

export function expenseReducer(state = [], action) {
    // console.log("Action ::>", action);
    switch(action.type) {
        case ADD_EXPENSE:
            return [...state, action.payload];
        case DELETE_EXPENSE:
            return state.filter((expense) => expense.id !== action.payload.id);
        case UPDATE_EXPENSE:
            return state.map(obj => [action.payload].find(o => o.id === obj.id) || obj);
        default:
            return state;
    }
}

export function productReducer(state = [], action) {
    switch(action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload];
        case DELETE_PRODUCT:
            return state.filter((product) => product.id !== action.payload.id);
        default:
            return state;
    }
}

export function buttonClickCountReducer(state = 0, action) {
    switch(action.type) {
        case COUNT_CLICK:
            return ++state;
        default:
            return state;
    }
}

export function loaderReducer(state = false, action) {
    switch(action.type) {
        case SHOW_LOADER:
            return true;
        case HIDE_LOADER:
            return false;
        default:
            return state;
    }
}

export function apiReducer(state = {items: [], isLoaded: false, message: "This is loading..."}, action) {
    switch(action.type) {
        case FETCH_API_EXPENSES:
            return {
                items: action.payload,
                isLoaded: true,
                message: "Data is fetched successfully !!"
            }
        case FETCH_API_EXPENSES_FAILURE:
            return {items: [], isLoaded: false, message: action.payload};
        case ADD_API_EXPENSE:
            let newItems = [...state.items, ...[action.payload]];
            return {
                items: newItems,
                isLoaded: true,
                message: "Data added successfully."
            }
        case UPDATE_API_EXPENSES_RECORD:
            let updatedItems = state.items.map(obj => [action.payload].find(o => o._id === obj._id) || obj);
            return {
                items: updatedItems,
                isLoaded: true,
                message: "Data updated successfully."
            }
        default:
            return state;
    }
}