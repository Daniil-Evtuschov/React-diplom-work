import { ActionsTypInt, InitialStateInt } from "../../../interfases";

const initialState:InitialStateInt = {
    filmsCard:[]
}

const apiFetchreducer = (state = initialState, action:ActionsTypInt | any)=>{
    switch (action.type) {
        case "SHOW_FILM_CARDS":
            return {...state,filmsCard:action.payload}
    default:
        return state;
    }
}

export default apiFetchreducer
