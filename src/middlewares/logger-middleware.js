const loggerMiddleware = ({ getState }) => next => action => {
    console.log('Dispatching:', action.type, action.payload);
    const result = next(action); // Pass the action to the next middleware/reducer
    console.log('New state:', getState());
    return result;
};

export default loggerMiddleware;