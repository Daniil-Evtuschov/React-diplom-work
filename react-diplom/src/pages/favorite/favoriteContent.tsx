import { useDispatch, useSelector } from "react-redux";
import  styleMainContent  from "../mainContent/mainContent.module.css";
import { useEffect } from "react";
import { featchFilmsCards } from "../../store/actions/fetchReducer";
import { InitialStateInt, filmCardProps, filmsCardsInt } from "../../interfases";
import FavoriteCards from "../../components/favoriteCards/favoriteCards";

const FavoritFilmsContent =()=>{
    const dispatch = useDispatch();
    // useEffect(()=>{dispatch(featchFilmsCards() as any)},[]);
    // const films = useSelector((state:InitialStateInt)=>state.filmCards); 
    const getStorageFilms:any = localStorage.getItem('favorite')
    const films:filmCardProps[] =JSON.parse(getStorageFilms)

  

    return(
        <div className={styleMainContent.MainContentLayout}>
            {/* кинопоиск */}
            {films ? films.length&&films.map((item)=><FavoriteCards id={item.id} 
            rating={item.rating} 
            poster={item.poster} 
            filmName={item.filmName} 
            genres={item.genres.map((item:string[])=>item+' ')} 
            year={item.year} 
            description={item.description}
            key={item.id}
            />):null}
        </div>
    )
}

export default FavoritFilmsContent