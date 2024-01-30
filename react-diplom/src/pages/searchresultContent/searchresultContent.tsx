import { useDispatch, useSelector } from "react-redux";
import  searchResultContent  from "./searchresultContent.module.css";
import { featchFilmsCards } from "../../store/actions/fetchReducer";
import { useEffect } from "react";
import { InitialStateInt, filmsCardsInt, filmsCardsProps } from "../../interfases";
import SearchResult from "../../components/searchResult/searchResult";

const SearchResultContent =()=>{
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(featchFilmsCards('') as any)},[]);
    const films = useSelector((state:InitialStateInt)=>state.searchFilms); 
    
    return(
        <>
        <div className={searchResultContent.MainContentLayout}>
            {/* кинопоиск */}
            {films ? films.length &&films.map((item)=><SearchResult 
            id={item.id}
            rating={item.rating.kp} 
            poster={item.poster ? item.poster.url:''} 
            filmName={item.name} 
            year={item.year} 
            description={item.description} 
            genres={item.genres.map(item=>item.name +' ')
            }/>):null}
            
            {/* OMDb API */}
            {/* {films ? films.length && films.map((item)=><FilmCard Year={item.Year} Poster={item.Poster} Title={item.Title} Type={item.Type} imdbID={item.imdbID} favorite={false}/>):null} */}
        </div>
         </>
    )
}

export default SearchResultContent