import { filmCardProps, filmsCardsInt } from "../../interfases";

export const actvieFilmCard = (item: filmCardProps | undefined)=>({
    type: 'SHOW_ACTIVE_FILM_CARD',
    payload: item
}) 