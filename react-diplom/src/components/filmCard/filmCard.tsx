import { filmsCardsProps } from "../../interfases"
import  styleFilmCard  from "./filmCard.module.css";

const FilmCard = ()=>{
    const prototype:filmsCardsProps[] =[{
        id:7,
        votes: '7.6',
        poster:'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/31e5705d-7135-4b6c-b886-5816762e581e/orig',
        filmTitle:'default',
        filmsGeners:' qwe342 ;23j41qhn 2134wasd',
    },{
        id:7,
        votes: '7.6',
        poster:'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/31e5705d-7135-4b6c-b886-5816762e581e/orig',
        filmTitle:'default',
        filmsGeners:' qwe342 ;23j41qhn 2134wasd',
    },{
        id:7,
        votes: '7.6',
        poster:'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/31e5705d-7135-4b6c-b886-5816762e581e/orig',
        filmTitle:'default',
        filmsGeners:' qwe342 ;23j41qhn 2134wasd',
    },{
        id:7,
        votes: '7.6',
        poster:'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/31e5705d-7135-4b6c-b886-5816762e581e/orig',
        filmTitle:'default',
        filmsGeners:' qwe342 ;23j41qhn 2134wasd',
    },{
        id:7,
        votes: '7.6',
        poster:'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/31e5705d-7135-4b6c-b886-5816762e581e/orig',
        filmTitle:'default',
        filmsGeners:' qwe342 ;23j41qhn 2134wasd',
    },{
        id:7,
        votes: '7.6',
        poster:'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/31e5705d-7135-4b6c-b886-5816762e581e/orig',
        filmTitle:'default',
        filmsGeners:' qwe342 ;23j41qhn 2134wasd',
    },{
        id:7,
        votes: '7.6',
        poster:'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/31e5705d-7135-4b6c-b886-5816762e581e/orig',
        filmTitle:'default',
        filmsGeners:' qwe342 ;23j41qhn 2134wasd',
    },{
        id:7,
        votes: '7.6',
        poster:'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/31e5705d-7135-4b6c-b886-5816762e581e/orig',
        filmTitle:'default',
        filmsGeners:' qwe342 ;23j41qhn 2134wasd',
    },]
    
    return(
        <>
        {prototype.map(item=>
        <div className={styleFilmCard.filmCardWrap} key={item.id}>
            <div className={styleFilmCard.filmCardWrapImg}>
                <span className={styleFilmCard.filmCardVote}>{item.votes}</span>
                <img className={styleFilmCard.filmCardPoster}src={item.poster} alt="" />
            </div>
            <div className={styleFilmCard.filmCardDescriptionWrap}>
                <div className={styleFilmCard.filmCardDescription}>{item.filmTitle}</div>
                <div className={styleFilmCard.filmCardDescription}>{item.filmsGeners}</div>
            </div>
        </div>
        )}
        </>
    )
} 

export default FilmCard