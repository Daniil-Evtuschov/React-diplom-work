import { useNavigate } from "react-router-dom";
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



const FilmCard = (props:filmCardProps)=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [card,setCard] = useState('favorite')  
    markFavoriteCard(props)  
    let cardMark = markFavoriteCard(props)
    
    // useEffect(()=>{setCard('activeCard')},[])

    return(
        <>
        <div onClick={()=>{navigate('/ActiveFilmCard');dispatch(actvieFilmCard(props));setLocalStorageItem(props)}} className={styleFilmCard.filmCardWrap}>
            <div className={styleFilmCard.filmCardWrapImg} key={props.id}>
                <span className={styleFilmCard.filmCardVote}>{props.rating}</span>
                <img className={styleFilmCard.filmCardPoster}src={props.poster} alt="" />
                <span onClick={(event)=>{addToFavorite(props,event);setCard('activeCard')}} className={cardMark}><FontAwesomeIcon className={asideStyle.asideIcosn} icon={faBookmark} /></span>
            </div>
            <div className={styleFilmCard.filmCardDescriptionWrap}>
                <div className={styleFilmCard.filmCardDescription}>{props.filmName}</div>
                <div className={styleFilmCard.filmCardDescription}>{props.genres}</div>
            </div>
        </div>
        </>
    )   
} 

export default FilmCard


        // <>
             {/* <div onClick={()=>{navigate('/ActiveFilmCard');dispatch(actvieFilmCard(props));setLocalStorageItem(props)}} className={styleFilmCard.filmCardWrap} key={props.imdbID}>
                <div className={styleFilmCard.filmCardWrapImg}>
                    <span className={styleFilmCard.filmCardVote}>{'7,8'}</span>
                    <img className={styleFilmCard.filmCardPoster}src={props.Poster} alt="" />
                    <span onClick={(event)=>{addToFavorite(props,event);setCard('activeCard')}} className={card}><FontAwesomeIcon className={asideStyle.asideIcosn} icon={faBookmark} /></span>
                </div>
                <div className={styleFilmCard.filmCardDescriptionWrap}>
                    <div className={styleFilmCard.filmCardDescription}>{props.Title}</div>
                    <div className={styleFilmCard.filmCardDescription}>{props.Type}</div>
                </div>
            </div>
        </>  */}