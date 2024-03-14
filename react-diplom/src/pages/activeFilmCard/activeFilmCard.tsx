import {InitialStateInt} from "../../interfases";
import {useDispatch, useSelector } from "react-redux";
import searchResultContent from "../searchresultContent/searchresultContent.module.css";
import SearchResult from "../../components/searchResult/searchResult";
import { useEffect } from "react";
import { searchFilmId } from "../../store/actions/fetchReducer";
import { useParams } from "react-router-dom";

const ActiveFilmCard = ()=>{
    const dispatch = useDispatch()
    let films = useSelector((store:InitialStateInt)=>store.filmOnID)
    const {id} = useParams()
    //@ts-ignore
    useEffect(()=>{dispatch(searchFilmId(id))},[])

    return(
        <div className={searchResultContent.MainContentLayout}>
        {/* кинопоиск */}
        {(films || []).map((item)=><SearchResult 
        id={item.id}
        rating={item.rating.imdb} 
        poster={item.poster ? item.poster.url:''} 
        filmName={item.name} 
        year={item.year} 
        description={item.description} 
        genres={item.genres.map(item=>item.name +' ')}
        key={item.id}/>)}
    </div>

    )
}

export default ActiveFilmCard