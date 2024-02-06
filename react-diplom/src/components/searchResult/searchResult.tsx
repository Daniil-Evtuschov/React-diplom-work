import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import addToFavorite from "../filmCard/addToFavorite";
import { ActiveFilmCardPropsInt, InitialStateInt } from "../../interfases";
import styleSearch from "./searchResult.module.css";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import asideStyle from "../../pages/activeFilmCard/activeFilmCard.module.css";
import styleFilmCard from "../..//components/filmCard/filmCard.module.css";
import { useNavigate } from "react-router-dom";
import setLocalStorageItem from "../filmCard/localstorageActiveItme";
import markFavoriteCard from "../filmCard/marckFavoriteCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searchFilmId } from "../../store/actions/fetchReducer";

const SearchResult =(props:ActiveFilmCardPropsInt)=>{
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [card,setCard] = useState('favorite')  
    markFavoriteCard(props)  
    let cardMark = markFavoriteCard(props);
    useEffect(()=>{console.log('filmId')},[])
    
    function handleShowActiveCard() {
        //@ts-ignore
        dispatch(searchFilmId(props.id.toString()))
    }
    return(
        <div>
        <div className={styleSearch.activeFilmCardWrap}>
            <div onClick={()=>{navigate('/ActiveFilmCard');handleShowActiveCard()}} className={styleSearch.activeFilmCardImgWrap}>
            <span className={styleFilmCard.filmCardVote}>{props.rating}</span>
            <img src={props.poster} alt="" className={styleSearch.activeFilmCardImg}/>
            <span onClick={(event)=>{addToFavorite(props,event);setCard('activeCard')}} className={cardMark||'favorite'}><FontAwesomeIcon className={asideStyle.asideIcosn} icon={faBookmark} /></span>
            </div>
            
            <div className={styleSearch.activeFilmCardContent}>
                
                <div className={styleSearch.activeFilmCardTitleWrap}><h2 className={styleSearch.activeFilmCardTitle}>{props.filmName}</h2></div>

                <div className={styleSearch.activeFilmCardYearWrap}><h2 className={styleSearch.activeFilmCardYear}>Year of relise: {props.year}</h2></div>
            
                <div className={styleSearch.activeFilmCardGenerWrap}><p className={styleSearch.activeFilmCardGener}>{' '+props.genres+' .'}</p></div>  

                <div className={styleSearch.activeFilmCardDescriptionWrap}><p className={styleSearch.activeFilmCardDescription}>{props.description}</p></div>   

            </div>
        </div>
    </div>
    )
}

export default SearchResult