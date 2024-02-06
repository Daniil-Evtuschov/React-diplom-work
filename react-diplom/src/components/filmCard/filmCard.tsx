import { useNavigate, useParams } from "react-router-dom";
import { InitialStateInt, filmCardProps, filmsCardsInt, filmsCardsProps } from "../../interfases"
import  styleFilmCard  from "./filmCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { actvieFilmCard } from "../../store/actions/activeFilmCardAction";
import setLocalStorageItem from "./localstorageActiveItme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons"
import asideStyle from "../../pages/aside/aside.module.css";
import addToFavorite from "./addToFavorite";
import { useEffect, useState } from "react";
import markFavoriteCard from "./marckFavoriteCard";
import { searchFilmId, showFilmOnId } from "../../store/actions/fetchReducer";



const FilmCard = (props:filmCardProps)=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [card,setCard] = useState('favorite')  
    markFavoriteCard(props)  
    let cardMark = markFavoriteCard(props)
    function handleShowActiveCard() {
        //@ts-ignore
        dispatch(searchFilmId(props.id.toString()))
    }
    //;setLocalStorageItem(props) удали это
    return(
        <>
        <div onClick={()=>{navigate('/ActiveFilmCard');dispatch(actvieFilmCard(props));handleShowActiveCard()}} className={styleFilmCard.filmCardWrap}>
            <div className={styleFilmCard.filmCardWrapImg}>
                <span className={styleFilmCard.filmCardVote}>{props.rating}</span>
                <img className={styleFilmCard.filmCardPoster}src={props.poster} alt="" />
                <span onClick={(event)=>{addToFavorite(props,event);setCard('activeCard')}} className={cardMark||'favorite'}><FontAwesomeIcon className={asideStyle.asideIcosn} icon={faBookmark} /></span>
            </div>
            <div className={styleFilmCard.filmCardDescriptionWrap}>
                <div className={styleFilmCard.filmCardDescription}><h3>{props.filmName}</h3></div>
                <div className={styleFilmCard.filmCardDescription}><p>{props.genres}</p></div>
            </div>
        </div>
        </>
    )   
} 

export default FilmCard