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




export const featchFilmsCards = (tenFilms1:string) => async (dispatch: typeof store.dispatch)=>{
  const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'X-API-KEY': '4HWWDX9-66EMDB2-JSFQVHE-R0WBRZ2'}
  };  

  const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie?page=1&limit=${tenFilms1}`,options);
        
  const data = await response.json();

  console.log('я ответ с сервера',data.docs);
  
  dispatch(getFilmsCards(data.docs))     
}

export const featchHightRaitingFilms = (tenFilms:string) => async (dispatch: typeof store.dispatch)=>{
  const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'X-API-KEY': '4HWWDX9-66EMDB2-JSFQVHE-R0WBRZ2'}
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