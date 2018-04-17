import { combineReducers } from 'redux';
import adminReducer from './admin';
import customerReducer from './customer';
import employeeReducer from './employee';
import authReducer from './auth';

const rootReducer = combineReducers({
    admin : adminReducer,
    customer: customerReducer,
    employee: employeeReducer,
    auth: authReducer
})

export default rootReducer;