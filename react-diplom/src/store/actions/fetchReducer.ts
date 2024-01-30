import { useSelector } from "react-redux";
import { store } from "../..";
import { InitialStateInt, filmsCardsInt } from "../../interfases";
import apiSearchFilms from "../../pages/header/filmsSearch";

export const getFilmsCards = (films: filmsCardsInt)=>({
  type: 'SHOW_FILM_CARDS',
  payload: films
})




export const featchFilmsCards = (tenFilms:any) => async (dispatch: typeof store.dispatch)=>{
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'X-API-KEY': 'ANH4KYK-G9CMPH6-GNZGJJ5-FC2GA14'}
      };  
    const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie?page=1&limit=${tenFilms}`,options);
        
    const data = await response.json();
    console.log(data.docs);
      
    dispatch(getFilmsCards(data.docs)) 
}

export const showSearchPost=(post:filmsCardsInt)=>({
  type:'SEARCH_POST',
  payload: post
})

export const searchPosts = (searchText:string) => async(dispatch: typeof store.dispatch)=>{
  const data = await apiSearchFilms(searchText);
  dispatch(showSearchPost(data))
}
// export const search = (tenFilms:any) => async (dispatch: typeof store.dispatch)=>{
//   const options = {
//       method: 'GET',
//       headers: {accept: 'application/json', 'X-API-KEY': '4HWWDX9-66EMDB2-JSFQVHE-R0WBRZ2'}
//     };  
//   const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie?page=1&limit=${tenFilms}`,options);
      
//   const data = await response.json();
//   console.log(data.docs);
    
//   dispatch(getFilmsCards(data.docs)) 
// }


// const options = {
//   method: 'GET',
//   headers: {accept: 'application/json', 'X-API-KEY': '4HWWDX9-66EMDB2-JSFQVHE-R0WBRZ2'}
// };

// fetch('https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// export const featchFilmsCards = ()=> async (dispatch: typeof store.dispatch)=>{

//     const apiKey = '26cb4071';
//     const movieTitle = 'Lord of the rings';
//     const page = 2;

//     const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(movieTitle)}&page=${page}`);

//     const data = await response.json();

//     const filmsCardData = data.Search

          
//     dispatch(getFilmsCards(filmsCardData)) 
// }
