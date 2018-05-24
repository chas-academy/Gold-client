import {
    FETCH_SERVICE_START,
    FETCH_SERVICE_SUCCESS,
    FETCH_SERVICE_FAILURE,
    FETCH_SERVICES_START,
    FETCH_SERVICES_SUCCESS,
    FETCH_SERVICES_FAILURE,
    FETCH_SERVICES_NEW_START,
    FETCH_SERVICES_NEW_SUCCESS,
    FETCH_SERVICES_NEW_FAILURE,
    FETCH_SERVICES_ASSIGNED_START,
    FETCH_SERVICES_ASSIGNED_SUCCESS,
    FETCH_SERVICES_ASSIGNED_FAILURE,
    FETCH_SERVICES_TAKEN_START,
    FETCH_SERVICES_TAKEN_SUCCESS,
    FETCH_SERVICES_TAKEN_FAILURE,
    FETCH_SERVICES_DONE_START,
    FETCH_SERVICES_DONE_SUCCESS,
    FETCH_SERVICES_DONE_FAILURE,
    SERVICE_HANDLE_START,
    SERVICE_HANDLE_SUCCESS,
    SERVICE_HANDLE_FAILURE,
    FETCH_ORDER_START, 
    FETCH_ORDER_SUCCESS, 
    FETCH_ORDER_FAILURE,
    FETCH_ORDERS_START,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAILURE,
    FETCH_INTERNAL_ORDER_START, 
    FETCH_INTERNAL_ORDER_SUCCESS, 
    FETCH_INTERNAL_ORDER_FAILURE,
    FETCH_INTERNAL_ORDERS_START,
    FETCH_INTERNAL_ORDERS_SUCCESS,
    FETCH_INTERNAL_ORDERS_FAILURE,
    FETCH_COMPLAINT_START, 
    FETCH_COMPLAINT_SUCCESS, 
    FETCH_COMPLAINT_FAILURE,
    FETCH_COMPLAINTS_START,
    FETCH_COMPLAINTS_SUCCESS,
    FETCH_COMPLAINTS_FAILURE,
} from '../actions/admin/Action-types'

const initialState = {
    isFetching: false,
    service: {},
    services: [],
    servicesNew: [],
    servicesAssigned: [],
    servicesTaken: [],
    servicesDone: [],
    order: {},
    orders: [],
    internalOrder: {},
    internalOrders: [],
    complaint: {},
    complaints: [],
    form: {},
    successMessage: null,
    errorMessage: null
};

const adminOrdersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SERVICE_START:
        return {
            ...state,
            isFetching: true
         };
        case FETCH_SERVICE_SUCCESS:
        return {
            ...state,
            isFetching: false,
            service: action.payload
         };
        case FETCH_SERVICE_FAILURE:
        return {
            ...state,
            isFetching: false,
            errorMessage: action.message
         };
        case FETCH_SERVICES_START:
        return {
            ...state,
            isFetching: true,
         };
        case FETCH_SERVICES_SUCCESS:
        return {
            ...state,
            isFetching: false,
            services: action.payload
         };
        case FETCH_SERVICES_FAILURE:
        return {
            ...state,
            isFetching: false,
            errorMessage: action.message
         };
        case FETCH_SERVICES_NEW_START:
        return {
            ...state,
            isFetching: true
         };
        case FETCH_SERVICES_NEW_SUCCESS:
        return {
            ...state,
            isFetching: false,
            servicesNew: action.payload
         };
        case FETCH_SERVICES_NEW_FAILURE:
        return {
            ...state,
            isFetching: false,
            errorMessage: action.message
         };
         case FETCH_SERVICES_ASSIGNED_START:
         return {
             ...state,
             isFetching: true
          };
         case FETCH_SERVICES_ASSIGNED_SUCCESS:
         return {
             ...state,
             isFetching: false,
             servicesAssigned: action.payload
          };
         case FETCH_SERVICES_ASSIGNED_FAILURE:
         return {
             ...state,
             isFetching: false,
             errorMessage: action.message
          };
         case FETCH_SERVICES_TAKEN_START:
         return {
             ...state,
             isFetching: true
          };
         case FETCH_SERVICES_TAKEN_SUCCESS:
         return {
             ...state,
             isFetching: false,
             servicesTaken: action.payload
          };
         case FETCH_SERVICES_TAKEN_FAILURE:
         return {
             ...state,
             isFetching: false,
             errorMessage: action.message
          };
          case FETCH_SERVICES_DONE_START:
          return {
              ...state,
              isFetching: true
           };
          case FETCH_SERVICES_DONE_SUCCESS:
          return {
              ...state,
              isFetching: false,
              servicesDone: action.payload
           };
          case FETCH_SERVICES_DONE_FAILURE:
          return {
              ...state,
              isFetching: false,
              errorMessage: action.message
           };
        case FETCH_ORDER_START:
        return {
            ...state,
            isFetching: true
         };
        case FETCH_ORDER_SUCCESS:
        return {
            ...state,
            isFetching: false,
            order: action.payload
         };
        case FETCH_ORDER_FAILURE:
        return {
            ...state,
            isFetching: false,
            errorMessage: action.message
         };
        case FETCH_ORDERS_START:
            return {
                ...state,
                isFetching: true
             };
        case FETCH_ORDERS_SUCCESS:
        return {
            ...state,
            isFetching: false,
            orders: action.payload
         };
        case FETCH_ORDERS_FAILURE:
        return {
            ...state,
            isFetching: false,
            errorMessage: action.message
         };
         case FETCH_INTERNAL_ORDER_START:
         return {
             ...state,
             isFetching: true
          };
         case FETCH_INTERNAL_ORDER_SUCCESS:
         return {
             ...state,
             isFetching: false,
             internalOrder: action.payload
          };
         case FETCH_INTERNAL_ORDER_FAILURE:
         return {
             ...state,
             isFetching: false
          };
         case FETCH_INTERNAL_ORDERS_START:
             return {
                 ...state,
                 isFetching: true
              };
         case FETCH_INTERNAL_ORDERS_SUCCESS:
         return {
             ...state,
             isFetching: false,
             internalOrders: action.payload
          };
         case FETCH_INTERNAL_ORDERS_FAILURE:
         return {
             ...state,
             isFetching: false,
             errorMessage: action.message
          };
          case FETCH_COMPLAINT_START:
          return {
              ...state,
              isFetching: true
           };
          case FETCH_COMPLAINT_SUCCESS:
          return {
              ...state,
              isFetching: false,
              complaint: action.payload
           };
          case FETCH_COMPLAINT_FAILURE:
          return {
              ...state,
              isFetching: false,
              errorMessage: action.message
           };
          case FETCH_COMPLAINTS_START:
              return {
                  ...state,
                  isFetching: true
               };
          case FETCH_COMPLAINTS_SUCCESS:
          return {
              ...state,
              isFetching: false,
              complaints: action.payload
           };
          case FETCH_COMPLAINTS_FAILURE:
          return {
              ...state,
              isFetching: false,
              errorMessage: action.message
           };
           case SERVICE_HANDLE_START:
           return {
               ...state,
               isFetching: true
            };
            case SERVICE_HANDLE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                successMessage: action.payload
             };
            case SERVICE_HANDLE_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message
             };
                default:
                return state;
   }        
}

export default adminOrdersReducer;

