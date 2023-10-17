import {actionTypes } from "../actions/actionTypes";

const initialState = {
    product : [],
    isError:false,
    isLoading:true
}

const productReducer = (state=initialState,action)=> {
    switch(action.type) {
        case actionTypes.SET_PRODUCTS:
        return {
            ...state,
            product:action.payload,
            isLoading:false}
        case actionTypes.SET_ERROR :
            return {
                ...state, isError:true
            }

        default:
            return state
    }

}
 
export default productReducer;