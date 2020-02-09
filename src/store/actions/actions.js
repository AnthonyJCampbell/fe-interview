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
    axios.get(`${APIConstants.base}/bills`)
        .then(res => {

        })
        .catch(() => {

        })
}

export const fetchingCategories = () => dispatch => {
    axios.get(`${APIConstants.base}/categories`)
        .then(res => {

        })
        .catch(() => {
            
        })
}

export const patchingBill = (isBill, id) => dispatch => {
    axios.patch(`${APIConstants.base}/bills/${id}`, {
        isBill: isBill
    })
        .then(res => {
            
        })
        .catch(() => {
            
        })
}
