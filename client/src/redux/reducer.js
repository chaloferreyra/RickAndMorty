
import {
    ADD_CHARACTER,
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    DELETE_CHARAPTERS,
    ADD_FAV,
    REMOVE_FAV
} from './types'


const initialState = {
    characters: [],
    myFavorites: [],
 };

 const rootReducer = (state = initialState, {type, payload}) => {  

    switch (type) {

        case ADD_CHARACTER:{

            return {
                  ...state,
                  characters: [ ...state.characters, payload]
            }
        }
        
        case DELETE_CHARAPTERS: {

            return {
                ...state,
                characters: state.characters.filter(character => character.id !== payload)
            };
        }

        case ADD_FAVORITE:{
            
            return {
                ...state,
                myFavorites: [ ...state.myFavorites, payload]
            };
        }
        case ADD_FAV:{
            return { ...state, myFavorites: payload, allCharacters: payload 
        
            };
        }
        case REMOVE_FAV:{
            
            return {
                ...state,
                myFavorites: state.myFavorites.filter(myFav => myFav.id !== +payload)
            };}
        
        default:
            return { 
                ...state
            };
    }
    
    
}; 

export default rootReducer;
