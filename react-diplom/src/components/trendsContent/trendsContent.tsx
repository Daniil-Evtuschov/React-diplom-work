import { useDispatch, useSelector } from "react-redux";
import FilmCard from "../filmCard/filmCard"
import  styleTrends  from "./trendsContent.module.css";
import { featchHightRaitingFilms } from "../../store/actions/fetchReducer";
import { useEffect } from "react";
import { InitialStateInt} from "../../interfases";

const TrendsContent =()=>{
    const dispatch = useDispatch();
    const films = useSelector((state:InitialStateInt)=>state.hightRaitingFilms); 
    
    const handleTenHightRatingFilmsAdd =()=>{
        const result = films.length+1
        dispatch(featchHightRaitingFilms(result.toString()) as any)        
    }
    useEffect(()=>{handleTenHightRatingFilmsAdd()},[handleTenHightRatingFilmsAdd]);

    return(
        <>
        <div className={styleTrends.MainContentLayout}>
            {/* кинопоиск */}
            {films ? films.length && films.map((item)=><FilmCard 
            id={item.id}
            rating={item.rating.imdb} 
            poster={item.poster.url} 
            filmName={item.name} 
            year={item.year} 
            description={item.description} 
            genres={item.genres.map(item=>item.name +' ')}
            key={item.id}
            />):null}
        </div>
         <button onClick={()=>{handleTenHightRatingFilmsAdd()}} className={styleTrends.showMore}>Show more</button>
         </>
    )
}

export default TrendsContent