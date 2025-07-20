import { v4 as uuidv4 } from 'uuid';
import { ADD_PRODUCT,
    COUNT_CLICK,
    DELETE_PRODUCT,
    HIDE_LOADER,
    SHOW_LOADER } from './types';

export const addProduct = ({name, amount, spendDate, category}) => ({
    type: ADD_PRODUCT,
    payload: {
        id: uuidv4(),
        name,
        amount,
        spendDate,
        category
    }
});

export const deleteProduct = id => ({
    type: DELETE_PRODUCT,
    payload: {
        id
    }
})

export const addCount = () => ({
    type: COUNT_CLICK
})

export const showLoader = () => ({
    type: SHOW_LOADER
})

export const hideLoader = () => ({
    type: HIDE_LOADER
})


