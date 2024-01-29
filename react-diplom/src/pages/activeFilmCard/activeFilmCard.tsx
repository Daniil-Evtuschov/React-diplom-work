import { useSelector } from "react-redux";
import { ActiveFilmCardPropsInt} from "../../interfases";
import Header from "../header/header";
import  styleActiveFilmCard  from "./activeFilmCard.module.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import asideStyle from "../aside/aside.module.css";
import addToFavorite from "../../components/filmCard/addToFavorite";

const ActiveFilmCard = ()=>{
    let localItem:any = localStorage.getItem('local')
    let readyLocalItem:ActiveFilmCardPropsInt= JSON.parse(localItem)
    const [card,setCard] = useState('favorite')    

    
    return(
            <div>
                <div className={styleActiveFilmCard.activeFilmCardWrap}>

                    <div className={styleActiveFilmCard.activeFilmCardImgWrap}><img src={readyLocalItem.poster} alt="" className={styleActiveFilmCard.activeFilmCardImg}/>
                    <span onClick={(event)=>{addToFavorite(readyLocalItem,event);setCard('activeCard')}} className={card}><FontAwesomeIcon className={asideStyle.asideIcosn} icon={faBookmark} /></span>
                    </div>
                    
                    <div className={styleActiveFilmCard.activeFilmCardContent}>
                        
                        <div className={styleActiveFilmCard.activeFilmCardTitleWrap}><h2 className={styleActiveFilmCard.activeFilmCardTitle}>{readyLocalItem.filmName}</h2></div>

                        <div className={styleActiveFilmCard.activeFilmCardYearWrap}><h2 className={styleActiveFilmCard.activeFilmCardYear}>Year of relise: {readyLocalItem.year}</h2></div>
                    
                        <div className={styleActiveFilmCard.activeFilmCardGenerWrap}><p className={styleActiveFilmCard.activeFilmCardGener}>{' '+readyLocalItem.genres+' .'}</p></div>  

                        <div className={styleActiveFilmCard.activeFilmCardDescriptionWrap}><p className={styleActiveFilmCard.activeFilmCardDescription}>{readyLocalItem.description}</p></div>   

                    </div>
                </div>
            </div>
    )
}

export default ActiveFilmCard