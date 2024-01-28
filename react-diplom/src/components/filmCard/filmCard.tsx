import { useNavigate } from "react-router-dom";
import { filmsCardsInt, filmsCardsProps } from "../../interfases"
import  styleFilmCard  from "./filmCard.module.css";
import { useDispatch } from "react-redux";


const FilmCard = (props:filmsCardsInt)=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return(
        // <>
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
        // </>
        <>
            <div onClick={()=>{navigate('/ActiveFilmCard')}} className={styleFilmCard.filmCardWrap} key={props.imdbID}>
                <div className={styleFilmCard.filmCardWrapImg}>
                    <span className={styleFilmCard.filmCardVote}>{props.Type}</span>
                    <img className={styleFilmCard.filmCardPoster}src={props.Poster} alt="" />
                </div>
                <div className={styleFilmCard.filmCardDescriptionWrap}>
                    <div className={styleFilmCard.filmCardDescription}>{props.Title}</div>
                    <div className={styleFilmCard.filmCardDescription}>{props.imdbID}</div>
                </div>
            </div>
        </>
        
    )   
} 

export default FilmCard