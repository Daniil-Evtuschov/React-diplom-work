import  styleMainContent  from "../mainContent/mainContent.module.css";
import { useEffect, useState } from "react";
import { filmCardProps } from "../../interfases";
import FavoriteCards from "../../components/favoriteCards/favoriteCards";

const FavoritFilmsContent =()=>{
    const [filmsLeinght,setFilmsLeinght]= useState(true)
    const getStorageFilms:any = localStorage.getItem('favorite')
    const films:filmCardProps[] =JSON.parse(getStorageFilms)||[]
    
    useEffect(()=>{
        if (films.length>0) {
        console.log('1');
        setFilmsLeinght(false)
        }else{setFilmsLeinght(true)}
        },[films])

    return(
        <>
        <div className={styleMainContent.MainContentLayout}>
            {(films || []).map((item:filmCardProps)=>
            <FavoriteCards id={item.id} 
            rating={item.rating} 
            poster={item.poster} 
            filmName={item.filmName} 
            genres={item.genres.map((item:string[])=>item+' ')} 
            year={item.year} 
            description={item.description}
            key={item.id}
            />)}
        </div>
        {filmsLeinght&&
        <>
        <h2>Add Something...</h2>
        </>
        }
        </>
    )
}

export default FavoritFilmsContent