 import {
    ADD_CHARACTER ,
    ADD_FAVORITE ,
    REMOVE_FAVORITE ,
    DELETE_CHARAPTERS
 } from "./types"


export const getCharacter = (characterId) =>{
    return async (dispatch) => {

        await fetch(`http://localhost:3001/rickandmorty/character/${characterId}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.name)  {
                return dispatch({ type: ADD_CHARACTER, payload: data });
            }else {
                window.alert('No hay personajes con ese ID');
            }
        })
    }
}

export const myFavorite = (character)=>{
    return {
        type: ADD_FAVORITE,
        payload: character
    }
}

export const removeFavorite = (id) => {
    return {
        type: REMOVE_FAVORITE,
        payload: id 
    }
}

export const deleteCharacter = (id) => {
    return {
        type: DELETE_CHARAPTERS,
        payload: id
    }
};