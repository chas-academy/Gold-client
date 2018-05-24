import { combineReducers } from 'redux';
import adminOrdersReducer from './AdminOrders';
import adminAccountsReducer from './AdminAccounts';
import customerReducer from './Customer';
import employeeReducer from './Employee';
import authReducer from './Auth';

const rootReducer = combineReducers({
    adminOrders: adminOrdersReducer,
    adminAccounts: adminAccountsReducer,
    customer: customerReducer,
    employee: employeeReducer,
    auth: authReducer
})

export default rootReducer;