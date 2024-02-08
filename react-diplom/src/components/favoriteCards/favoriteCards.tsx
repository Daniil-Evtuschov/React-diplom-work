import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import styleFilmCard from "./favoriteCards.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons"
import asideStyle from "../../pages/aside/aside.module.css";
import deleteFromFavorite from "./deleteFromfavorite";
import { useState } from "react";
import { searchFilmId } from "../../store/actions/fetchReducer";

const FavoriteCards = (props:any)=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [card,setCard] = useState(true)    
    function handleShowActiveCard() {
        //@ts-ignore
        dispatch(searchFilmId(props.id.toString()))
    }
    return(
            <>{card&&
                <div onClick={()=>{navigate('/ActiveFilmCard');handleShowActiveCard()}} className={styleFilmCard.filmCardWrap} key={props.id}>
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