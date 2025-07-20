import { v4 as uuidv4 } from 'uuid';
import {
    ADD_API_EXPENSES_REQUEST, ADD_EXPENSE,
    DELETE_API_EXPENSES_REQUEST,
    DELETE_EXPENSE,
    FETCH_API_EXPENSES_REQUEST,
    UPDATE_API_EXPENSES_RECORD,
    UPDATE_API_EXPENSES_REQUEST,
    UPDATE_EXPENSE
} from './types';

export const addExpense = ({ name, amount, spendDate, category }) => ({
    type: ADD_EXPENSE,
    payload: {
        id: uuidv4(),
        name,
        amount,
        spendDate,
        category
    }
});

export const updateExpense = ({ id, name, amount, spendDate, category }) => ({
    type: UPDATE_EXPENSE,
    payload: {
        id,
        name,
        amount,
        spendDate,
        category
    }
});

export const deleteExpense = id => ({
    type: DELETE_EXPENSE,
    payload: {
        id
    }
});

export const fetchApiExpenses = () => ({
    type: FETCH_API_EXPENSES_REQUEST
})

export const deleteApiExpense = id => ({
    type: DELETE_API_EXPENSES_REQUEST,
    payload: {
        id
    }
})

export const addApiExpense = item => ({
    type: ADD_API_EXPENSES_REQUEST,
    payload: {
        item
    }
})

export const updateApiExpense = item => ({
    type: UPDATE_API_EXPENSES_REQUEST,
    payload: {
        item
    }
})

export const updateApiExpenseData = item => ({
    type: UPDATE_API_EXPENSES_RECORD,
    payload: {
        item
    }
})