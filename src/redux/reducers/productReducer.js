
const initialState = {
    product : [],
    isError:false,
    isLoading:true
}

const productReducer = (state=initialState,action)=> {
    switch(action.type) {
        case'SET_PRODUCT' :
        return {
            ...state,
            product:action.payload,
            isLoading:false}

        default:
            return state
    }

}
 
export default productReducer;