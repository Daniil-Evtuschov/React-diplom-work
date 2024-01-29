import { filmsCardsInt } from "../../interfases";

export const actvieFilmCard = (item: filmsCardsInt | undefined)=>({
    type: 'SHOW_ACTIVE_FILM_CARD',
    payload: item
}) 