import { useNavigate } from "react-router-dom";
import { InitialStateInt, filmsCardsInt, filmsCardsProps } from "../../interfases"
import { useDispatch, useSelector } from "react-redux";
import styleFilmCard from "./favoriteCards.module.css";
import { actvieFilmCard } from "../../store/actions/activeFilmCardAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons"
import asideStyle from "../../pages/aside/aside.module.css";
import setLocalStorageItem from "../filmCard/localstorageActiveItme";
import deleteFromFavorite from "./deleteFromfavorite";
import { useState } from "react";

const FavoriteCards = (props:any)=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [card,setCard] = useState(true)    

    return(
            <>{card&&
                <div onClick={()=>{navigate('/ActiveFilmCard');dispatch(actvieFilmCard(props));setLocalStorageItem(props)}} className={styleFilmCard.filmCardWrap} key={props.id}>
                    <div className={styleFilmCard.filmCardWrapImg}>
                        <span className={styleFilmCard.filmCardVote}>{props.rating}</span>
                        <img className={styleFilmCard.filmCardPoster}src={props.poster} alt="" />
                        <span onClick={(event)=>{deleteFromFavorite(props,event);setCard(!card)}} className={'activeCard'}><FontAwesomeIcon className={asideStyle.asideIcosn} icon={faBookmark} /></span>
                    </div>
                    <div className={styleFilmCard.filmCardDescriptionWrap}>
                        <div className={styleFilmCard.filmCardDescription}><h3>{props.filmName}</h3></div>
                        <div className={styleFilmCard.filmCardDescription}><p>{props.genres}</p></div>
                    </div>
                </div>
            }</>
    )   
} 

export default FavoriteCards