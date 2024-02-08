import { useDispatch, useSelector } from "react-redux";
import  styleMainContent  from "./mainContent.module.css";
import { useEffect } from "react";
import { featchFilmsCards } from "../../store/actions/fetchReducer";
import { InitialStateInt, filmsCardsInt } from "../../interfases";
import FavoriteCards from "../../components/favoriteCards/favoriteCards";

const FavoritFilmsContent =()=>{
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(featchFilmsCards() as any)},[]);
    // const films = useSelector((state:InitialStateInt)=>state.filmCards); 
    const getStorageFilms:any = localStorage.getItem('favorite') 
    const films:filmsCardsInt[] =JSON.parse(getStorageFilms)


    return(
        <div className={styleMainContent.MainContentLayout}>
            {/* кинопоиск */}
            {/* {films.map((item)=><FilmCard id={item.id} votes={item.votes.imdb} filmser={item.filmser.url} description={item.description} geners={'dramma'} filmName={item.name} />)} */}
            
            {/* OMDb API */}
            {films ? films.length && films.map((item:filmsCardsInt)=><FavoriteCards Year={item.Year} Poster={item.Poster} Title={item.Title} Type={item.Type} imdbID={item.imdbID} favorite={false}/>):null}
        </div>
    )
}

export default FavoritFilmsContent