import { ActionsTypInt, InitialStateInt, filmsCardsInt } from "../../../interfases";
const initialState:InitialStateInt = {
    filmsCard:[],
    activeFilmCard:[],
    favorite:false,
    searchFilms:[],
    hightRaitingFilms:[],
    theme:'',
    filmOnID:[]
}

const apiFetchreducer = (state = initialState, action:ActionsTypInt | any)=>{
    switch (action.type) {
        case "SHOW_ACTIVE_FILM_CARD":
            return{...state,activeFilmCard:action.payload}

        case "SHOW_FILM_CARDS":
             return {...state,filmsCard:action.payload}

        case "SHOW_TRENDS_FILM_CARDS":
            return{...state,hightRaitingFilms:action.payload}

        case "SEARCH_POST":
            return {...state, searchFilms: action.payload}

        case "DARK_THEME":
            return {...state, theme: action.payload}
            
        case "LIGHT_THEME":
            return {...state, theme: action.payload}
     
        case "SEARCH_FILIM_ID":
            return {...state, filmOnID: action.payload}        
    default:
        return state
    }
}

export default apiFetchreducer
