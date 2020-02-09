import axios from 'axios'
import { APIConstants } from '../../shared/constants'

// Action Creators
export const actionCreators = {
    FETCHING_BILLS: 'FETCHING_BILLS',
    FETCHING_BILLS_SUCCESS: 'FETCHING_BILLS_SUCCESS',
    FETCHING_BILLS_ERROR: 'FETCHING_BILLS_ERROR',

    FETCHING_CATEGORIES: 'FETCHING_CATEGORIES',
    FETCHING_CATEGORIES_SUCCESS: 'FETCHING_CATEGORIES_SUCCESS',
    FETCHING_CATEGORIES_ERROR: 'FETCHING_CATEGORIES_ERROR',

    PATCHING_BILL: 'PATCHING_BILL',
    PATCHING_BILL_SUCCESS: 'PATCHING_BILL_SUCCESS',
    PATCHING_BILL_ERROR: 'PATCHING_BILL_ERROR',
}

export const fetchingBills = () => dispatch => {
    dispatch({ type: actionCreators.FETCHING_BILLS })

    axios.get(`${APIConstants.base}/bills`)
        .then(res => {
            return dispatch({
                type: actionCreators.FETCHING_BILLS_SUCCESS,
                payload: {
                    data: res.data
                }
            })
        })
        .catch(() => {
            return dispatch({
                type: actionCreators.FETCHING_BILLS_ERROR,
                payload: {
                    errorMessage: "Error in retrieving your bills. Check your connection."
                }
            })
        })
}

export const fetchingCategories = () => dispatch => {
    dispatch({ type: actionCreators.FETCHING_CATEGORIES })

    axios.get(`${APIConstants.base}/categories`)
        .then(res => {
            return dispatch({
                type: actionCreators.FETCHING_CATEGORIES_SUCCESS,
                payload: {
                    data: res.data
                }
            })
        })
        .catch(() => {
            return dispatch({
                type: actionCreators.FETCHING_CATEGORIES_ERROR,
                payload: {
                    errorMessage: "Error in retrieving the categories. Check your connection."
                }
            })
        })
}

export const patchingBill = (isBill, id) => dispatch => {
    dispatch({ type: actionCreators.PATCHING_BILL })

    axios.patch(`${APIConstants.base}/bills/${id}`, {
        isBill: isBill
    })
        .then(res => {
            dispatch({
                type: actionCreators.PATCHING_BILL_SUCCESS,
            })
        })
        .catch(() => {
            return dispatch({
                type: actionCreators.PATCHING_BILL_ERROR,
                payload: {
                    errorMessage: "Error in updating your bills. Check your connection and try again."
                }
            })
        })
}
