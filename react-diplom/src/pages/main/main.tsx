import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MainContent from "../../components/mainContent/mainContent";
import ActiveFilmCard from "../activeFilmCard/activeFilmCard";
import FavoritFilmsContent from "../favorite/favoriteContent";
import Header from "../header/header"
import  MainStyle  from "./main.module.css";
import SearchResultContent from "../searchresultContent/searchresultContent";
import TrendsContent from "../../components/trendsContent/trendsContent";

const Main = ()=>{    
    return(
<>
        <div className={MainStyle.mainWrap}>
            <Header />
            <Routes>
                <Route path='/home' element={<MainContent />}/>
                <Route path='/ActiveFilmCard' element={<ActiveFilmCard/>}/>
                <Route path='/favoritFilmsContent' element={<FavoritFilmsContent/>}/>
                <Route path='/SearchResultContent' element={<SearchResultContent/>}/>
                <Route path='/TrendsContent' element={<TrendsContent/>}/>
            </Routes>
        </div>
</>

    )
}

export default Main
