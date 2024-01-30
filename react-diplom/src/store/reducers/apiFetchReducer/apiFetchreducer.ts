import { ActionsTypInt, InitialStateInt } from "../../../interfases";

const initialState:InitialStateInt = {
    filmsCard:[],
    activeFilmCard:[],
    favorite:false,
    searchFilms:[]
}

const apiFetchreducer = (state = initialState, action:ActionsTypInt | any)=>{
    switch (action.type) {
        case "SHOW_FILM_CARDS":
            return {...state,filmsCard:action.payload}

        case "SHOW_ACTIVE_FILM_CARD":
            return{...state,activeFilmCard:action.payload}

        case "SEARCH_POST":
            return {...state, searchFilms: action.payload}

    default:
        return state
    }
}

export default apiFetchreducer
