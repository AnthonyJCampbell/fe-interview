import { actionCreators } from '../actions/actions';

const initialState = {
    bills: [],
    categories: []
}

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators.FETCHING_BILLS:
            return {
                // TO-DO: Add loader state
                ...state,
            }

        case actionCreators.FETCHING_BILLS_SUCCESS:
            return {
                ...state,
                bills: action.payload.data,
            }

        case actionCreators.FETCHING_BILLS_ERROR:
            // TO-DO: Add error message
            return {
                ...state,
            }

        case actionCreators.FETCHING_CATEGORIES:
            return {
                // TO-DO: Add loader state
                ...state,
            }

        case actionCreators.FETCHING_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload.data,
            }

        case actionCreators.FETCHING_CATEGORIES_ERROR:
            return {
                // TO-DO: Add error message
                ...state,
            }

        case actionCreators.PATCHING_BILL:
            return {
                // TO-DO: Add loader state
                ...state,
            }

        case actionCreators.PATCHING_BILL_SUCCESS:
            return {
                ...state,
            }

        case actionCreators.PATCHING_BILL_ERROR:
            return {
                // TO-DO: Add error message
                ...state,
            }

        default:
            return state
    }
}

export default myReducer