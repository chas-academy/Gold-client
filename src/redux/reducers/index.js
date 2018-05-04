import { combineReducers } from 'redux';
import adminReducer from './Admin';
import customerReducer from './Customer';
import employeeReducer from './Employee';
import authReducer from './Auth';

const rootReducer = combineReducers({
    admin: adminReducer,
    customer: customerReducer,
    employee: employeeReducer,
    auth: authReducer
})

export default rootReducer;
