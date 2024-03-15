import { useDispatch, useSelector } from "react-redux";
import FilmCard from "../../components/filmCard/filmCard"
import  styleMainContent  from "../mainContent/mainContent.module.css";
import { featchHightRaitingFilms } from "../../store/actions/fetchReducer";
import { useEffect } from "react";
import { InitialStateInt} from "../../interfases";

const TrendsContent =()=>{
    const dispatch = useDispatch();
    const films = useSelector((state:InitialStateInt)=>state.hightRaitingFilms); 
    
    useEffect(()=>{
        if (films.length===0) {
            handleTenHightRatingFilmsAdd()
        }
    },[]);
    useEffect(()=>{dispatch(featchHightRaitingFilms('10') as any)},[]);
    
    const handleTenHightRatingFilmsAdd =()=>{
        const result = films.length+10
        dispatch(featchHightRaitingFilms(result.toString()) as any)        
    }

    return(
        <>
        <div className={styleMainContent.MainContentLayout}>
            {/* кинопоиск */}
            {(films || []).map((item)=><FilmCard 
            id={item.id}
            rating={item.rating.imdb} 
            poster={item.poster.url} 
            filmName={item.name} 
            year={item.year} 
            description={item.description} 
            genres={item.genres.map(item=>item.name +' ')}
            key={item.id}
            />)}
        </div>
         <button onClick={()=>{handleTenHightRatingFilmsAdd()}} className={styleMainContent.showMore}>Show more</button>
         </>
    )
}

export default TrendsContent