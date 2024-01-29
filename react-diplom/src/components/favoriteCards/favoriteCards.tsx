import { useNavigate } from "react-router-dom";
import { InitialStateInt, filmsCardsInt, filmsCardsProps } from "../../interfases"
import { useDispatch, useSelector } from "react-redux";
import styleFilmCard from "../filmCard/filmCard.module.css";
import { actvieFilmCard } from "../../store/actions/activeFilmCardAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons"
import asideStyle from "../../pages/aside/aside.module.css";
import setLocalStorageItem from "../filmCard/localstorageActiveItme";
import addToFavorite from "../filmCard/addToFavorite";
import deleteFromFavorite from "./deleteFromfavorite";

const FavoriteCards = (props:filmsCardsInt)=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    return(
        <div>
            <div onClick={()=>{navigate('/ActiveFilmCard');dispatch(actvieFilmCard(props));setLocalStorageItem(props)}} className={styleFilmCard.filmCardWrap} key={props.imdbID}>
                <div className={styleFilmCard.filmCardWrapImg}>
                    <span className={styleFilmCard.filmCardVote}>{'7,8'}</span>
                    <img className={styleFilmCard.filmCardPoster}src={props.Poster} alt="" />
                    <span onClick={(event)=>{deleteFromFavorite(props,event)}} className={styleFilmCard.favorite}><FontAwesomeIcon className={asideStyle.asideIcosn} icon={faBookmark} /></span>
                </div>
                <div className={styleFilmCard.filmCardDescriptionWrap}>
                    <div className={styleFilmCard.filmCardDescription}>{props.Title}</div>
                    <div className={styleFilmCard.filmCardDescription}>{props.Type}</div>
                </div>
            </div>
        </div>
    )   
} 

export default FavoriteCards

                        {/* // <>
        // <div onClick={()=>{navigate('/ActiveFilmCard')}} className={styleFilmCard.filmCardWrap} key={props.id}>
        //     <div className={styleFilmCard.filmCardWrapImg}>
        //         <span className={styleFilmCard.filmCardVote}>{props.votes}</span>
        //         <img className={styleFilmCard.filmCardPoster}src={props.poster} alt="" />
        //     </div>
        //     <div className={styleFilmCard.filmCardDescriptionWrap}>
        //         <div className={styleFilmCard.filmCardDescription}>{props.filmName}</div>
        //         <div className={styleFilmCard.filmCardDescription}>{props.geners}</div>
        //     </div>
        // </div>
        // </> */}
