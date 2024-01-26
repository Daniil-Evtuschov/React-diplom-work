import { filmsCardsProps } from "../../interfases";
import  styleActiveFilmCard  from "./activeFilmCard.module.css";

const ActiveFilmCard = ()=>{
    const prototype:filmsCardsProps[] =[{
        id:7,
        votes: '7.6',
        poster:'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/31e5705d-7135-4b6c-b886-5816762e581e/orig',
        filmTitle:'default',
        filmsGeners:' qwe342 ;23j41qhn 2134wasd',
        filmDescription:'    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In perferendis asperiores corrupti praesentium fuga. Sint quisquam minus aliquam eligendi voluptate amet sit, esse corporis est temporibus ducimus assumenda odit nemo hic cumque quod alias. Porro autem amet illo recusandae nisi?',
        year:'20 06 2004'
    }]
    return(
        <>
        {prototype.map(item=>
            <div className={styleActiveFilmCard.activeFilmCardWrap}>

                <div className={styleActiveFilmCard.activeFilmCardImgWrap}><img src={item.poster} alt="" className={styleActiveFilmCard.activeFilmCardImg}/></div>
               
                <div className={styleActiveFilmCard.activeFilmCardContent}>
                    
                    <div className={styleActiveFilmCard.activeFilmCardTitleWrap}><h2 className={styleActiveFilmCard.activeFilmCardTitle}>{item.filmTitle}</h2></div>

                    <div className={styleActiveFilmCard.activeFilmCardYearWrap}><h2 className={styleActiveFilmCard.activeFilmCardYear}>Year of relise {item.year}</h2></div>
                
                    <div className={styleActiveFilmCard.activeFilmCardGenerWrap}><p className={styleActiveFilmCard.activeFilmCardGener}>{item.filmsGeners}</p></div>  

                    <div className={styleActiveFilmCard.activeFilmCardDescriptionWrap}><p className={styleActiveFilmCard.activeFilmCardDescription}>{item.filmDescription}</p></div>   

                </div>
            </div>
        )}
        </>
    )
}

export default ActiveFilmCard