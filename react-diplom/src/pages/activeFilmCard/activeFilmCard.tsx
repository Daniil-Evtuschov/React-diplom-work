import { useSelector } from "react-redux";
import { InitialStateInt, filmsCardsInt } from "../../interfases";
import Header from "../header/header";
import  styleActiveFilmCard  from "./activeFilmCard.module.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import asideStyle from "../aside/aside.module.css";
import addToFavorite from "../../components/filmCard/addToFavorite";

const ActiveFilmCard = ()=>{
    let localItem:any = localStorage.getItem('local')
    let readyLocalItem:any = JSON.parse(localItem)
    console.log(readyLocalItem);
    //activeCard
    //favorite
    const [card,setCard] = useState('activeCard')    

    
    return(
            <div>
                <div className={styleActiveFilmCard.activeFilmCardWrap}>

                    <div className={styleActiveFilmCard.activeFilmCardImgWrap}><img src={readyLocalItem.Poster} alt="" className={styleActiveFilmCard.activeFilmCardImg}/>
                    <span onClick={(event)=>{addToFavorite(readyLocalItem,event);setCard('activeCard')}} className={'favorite'}><FontAwesomeIcon className={asideStyle.asideIcosn} icon={faBookmark} /></span>
                    </div>
                    
                    <div className={styleActiveFilmCard.activeFilmCardContent}>
                        
                        <div className={styleActiveFilmCard.activeFilmCardTitleWrap}><h2 className={styleActiveFilmCard.activeFilmCardTitle}>{readyLocalItem.Title}</h2></div>

                        <div className={styleActiveFilmCard.activeFilmCardYearWrap}><h2 className={styleActiveFilmCard.activeFilmCardYear}>Year of relise: {readyLocalItem.Year}</h2></div>
                    
                        <div className={styleActiveFilmCard.activeFilmCardGenerWrap}><p className={styleActiveFilmCard.activeFilmCardGener}>{readyLocalItem.Type}</p></div>  

                        <div className={styleActiveFilmCard.activeFilmCardDescriptionWrap}><p className={styleActiveFilmCard.activeFilmCardDescription}>{readyLocalItem.Title}</p></div>   

                    </div>
                </div>
            </div>
    )
}

export default ActiveFilmCard