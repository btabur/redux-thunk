

const initialState = {
    basket :[]
}

const basketReducer = (state=initialState,action) => {
        switch(action.type) {
            case 'ADD_BASKET' :
                return {state}
            
                default:
                    return {state}
        }
}

export default basketReducer;