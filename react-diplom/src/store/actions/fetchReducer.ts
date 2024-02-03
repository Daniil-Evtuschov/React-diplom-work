import { store } from "../..";
import { filmsCardsInt } from "../../interfases";
import apiSearchFilms from "../../pages/header/filmsSearch";

export const getFilmsCards = (films: filmsCardsInt[])=>({
  type: 'SHOW_FILM_CARDS',
  payload: films
})


export const getTrendsFilmsCards = (hiRaitingFilms: filmsCardsInt[])=>({
  type: 'SHOW_TRENDS_FILM_CARDS',
  payload: hiRaitingFilms
})




export const featchFilmsCards = (tenFilms:string) => async (dispatch: typeof store.dispatch)=>{
  const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'X-API-KEY': ' NMJ5Z6Y-4X149V8-QZZ8X9B-N1MRM09'} //твой токен тут :D
  };  

  const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie?page=1&limit=${tenFilms}`,options);
        
  const data = await response.json();

  dispatch(getFilmsCards(data.docs));     
}

export const featchHightRaitingFilms = (tenFilms:string) => async (dispatch: typeof store.dispatch)=>{
  const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'X-API-KEY': ' NMJ5Z6Y-4X149V8-QZZ8X9B-N1MRM09'}
  }; 

  const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie?page=1&limit=${tenFilms}&rating.imdb=9-10`,options);
      
  const data = await response.json();
    
  dispatch(getTrendsFilmsCards(data.docs)); 
}


export const showSearchPost=(post:filmsCardsInt[])=>({
  type:'SEARCH_POST',
  payload: post
})

export const searchPosts = (searchText:string) => async(dispatch: typeof store.dispatch)=>{
  const data = await apiSearchFilms(searchText);
  dispatch(showSearchPost(data))
}