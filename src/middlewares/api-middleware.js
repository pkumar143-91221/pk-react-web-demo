import {
    ADD_API_EXPENSE,
    ADD_API_EXPENSES_REQUEST,
    API_URL,
    DELETE_API_EXPENSES_REQUEST, FETCH_API_EXPENSES,
    FETCH_API_EXPENSES_FAILURE,
    FETCH_API_EXPENSES_REQUEST,
    HIDE_LOADER,
    SHOW_LOADER,
    UPDATE_API_EXPENSES_RECORD,
    UPDATE_API_EXPENSES_REQUEST
} from "../actions/types";

const apiMiddleware = ({ dispatch, getState }) => next => async (action) => {

    switch (action.type) {
        case FETCH_API_EXPENSES_REQUEST:
            try {
                dispatch({ type: SHOW_LOADER })
                const response = await fetch(API_URL + "expenses"); // Make your API call
                const data = await response.json();
                dispatch({ type: HIDE_LOADER })
                dispatch({ type: FETCH_API_EXPENSES, payload: data });
            } catch (error) {
                dispatch({ type: HIDE_LOADER })
                dispatch({ type: FETCH_API_EXPENSES_FAILURE, payload: error.message });
            }
            break;
        case DELETE_API_EXPENSES_REQUEST:
            try {
                dispatch({ type: SHOW_LOADER })
                const response = await fetch(API_URL + 'expense/' + action.payload.id, { method: 'DELETE' }) // Make your API call
                const data = await response.json();
                dispatch({ type: HIDE_LOADER })
                dispatch({ type: FETCH_API_EXPENSES_REQUEST});
            } catch (error) {
                dispatch({ type: HIDE_LOADER })
                dispatch({ type: FETCH_API_EXPENSES_FAILURE, payload: error.message });
            }
            break;
        case ADD_API_EXPENSES_REQUEST:
            try {
                dispatch({ type: SHOW_LOADER })
                const response = await fetch(API_URL + 'expense/', { 
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    method: 'POST', body: JSON.stringify(action.payload) 
                })
                const responseData = await response.json();
                dispatch({ type: HIDE_LOADER })
                dispatch({ type: ADD_API_EXPENSE, payload: responseData});
            } catch (error) {
                dispatch({ type: HIDE_LOADER })
                dispatch({ type: FETCH_API_EXPENSES_FAILURE, payload: error.message });
            }
            break;
        case UPDATE_API_EXPENSES_REQUEST:
            try {
                dispatch({ type: SHOW_LOADER })
                const response = await fetch(API_URL + 'expense/' + action.payload.item.id, { 
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    method: 'PUT', body: JSON.stringify(action.payload) 
                })
                const responseData = await response.json();
                dispatch({ type: HIDE_LOADER })
                console.log("Updated data ::>", responseData);
                dispatch({ type: UPDATE_API_EXPENSES_RECORD, payload: responseData});
            } catch (error) {
                dispatch({ type: HIDE_LOADER })
                dispatch({ type: FETCH_API_EXPENSES_FAILURE, payload: error.message });
            }
            break;

    }
    return next(action);
};

export default apiMiddleware;