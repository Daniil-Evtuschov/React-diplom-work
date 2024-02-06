import {InitialStateInt, filmsCardsInt} from "../../interfases";
import {useDispatch, useSelector } from "react-redux";
import searchResultContent from "../searchresultContent/searchresultContent.module.css";
import SearchResult from "../../components/searchResult/searchResult";
import { useEffect } from "react";
import { searchFilmId } from "../../store/actions/fetchReducer";
import { useParams } from "react-router-dom";

const ActiveFilmCard = ()=>{
    const dispatch = useDispatch()
    let films = useSelector((store:InitialStateInt)=>store.filmOnID)
    let filmId = films.map((item:filmsCardsInt)=>item.id).join()

    useEffect(()=>{console.log(filmId)},[])
    
    // dispatch(searchFilmId(props.id.toString()))
    //@ts-ignore
    // useEffect(()=>{dispatch(searchFilmId(filmId))
    return(
        <div className={searchResultContent.MainContentLayout}>
        {/* кинопоиск */}
        {films ? films.length &&films.map((item)=><SearchResult 
        id={item.id}
        rating={item.rating.imdb} 
        poster={item.poster ? item.poster.url:''} 
        filmName={item.name} 
        year={item.year} 
        description={item.description} 
        genres={item.genres.map(item=>item.name +' ')}
        key={item.id}/>):null}
    </div>

    )
}

export default ActiveFilmCard