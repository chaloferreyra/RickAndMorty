const initialState = {
    myFavorites: []
 };

 const rootReducer = (state = initialState, {type, payload}) => {  

    switch (type) {
        case ADD_FAVORITE:
            
            return {
                ...state,
                myFavorites: payload
            };
        case REMOVE_FAVORITE:
            
            return {
                ...state,
                myFavorites: payload.id
            };
        default:
            return { 
                ...state
            };
    }
    
    return  {type, payload}; 
}; 

export default rootReducer;
