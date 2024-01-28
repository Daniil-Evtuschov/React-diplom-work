import { store } from "../..";
import { filmsCardsInt } from "../../interfases";

export const getFilmsCards =(films: filmsCardsInt)=>({
  type: 'SHOW_FILM_CARDS',
  payload: films
})
// export const featchFilmsCards = ()=> async (dispatch: typeof store.dispatch)=>{

//     const options = {
//         method: 'GET',
//         headers: {accept: 'application/json', 'X-API-KEY': '4HWWDX9-66EMDB2-JSFQVHE-R0WBRZ2'}
//       };  
//     const response = await fetch('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10');
        
//     const data = await response.json();
//     console.log(data.docs);
      
//     dispatch(getFilmsCards(data.docs)) 
// }

export const featchFilmsCards = ()=> async (dispatch: typeof store.dispatch)=>{

    const apiKey = '26cb4071';
    const movieTitle = 'Lord of the rings';
    const page = 2;

    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(movieTitle)}&page=${page}`);
        
    const data = await response.json();
    console.log(data.Search);
      
    dispatch(getFilmsCards(data.Search)) 
}
