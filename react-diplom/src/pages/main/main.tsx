import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MainContent from "../../components/mainContent/mainContent";
import ActiveFilmCard from "../activeFilmCard/activeFilmCard";
import FavoritFilmsContent from "../favorite/favoriteContent";
import Header from "../header/header"
import  MainStyle  from "./main.module.css";
import Aside from "../aside/aside";
import { useDispatch } from "react-redux";
import { getmoreFilms } from "./getMoreFilms";

const Main = ()=>{
    const dispatch = useDispatch()
    
    return(
<>
        <div className={MainStyle.mainWrap}>
            <Header />
            <Routes>
                <Route path='/home' element={<MainContent />}/>
                <Route path='/ActiveFilmCard' element={<ActiveFilmCard/>}/>
                <Route path='/favoritFilmsContent' element={<FavoritFilmsContent/>}/>
            </Routes>
            <button onClick={()=>{getmoreFilms()}} className={MainStyle.showMore}>Show more</button>
        </div>
</>

    )
}

export default Main