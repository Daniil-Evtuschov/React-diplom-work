import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MainContent from "../../pages/mainContent/mainContent";
import ActiveFilmCard from "../../pages/activeFilmCard/activeFilmCard";
import FavoritFilmsContent from "../../pages/favorite/favoriteContent";
import Header from "../../pages/header/header"
import SearchResultContent from "../../pages/searchresultContent/searchresultContent";
import TrendsContent from "../../pages/trendsContent/trendsContent";
import SignInPanel from "../../pages/signIn/signIn";
import SignUpPanel from "../../pages/signUp/signUp";

const Main = ()=>{    
    return(
        <div >
            <Header />
            <Routes>
                <Route path='/home' element={<MainContent />}/>
                <Route path='/ActiveFilmCard' element={<ActiveFilmCard/>}/>
                <Route path='/favoritFilmsContent' element={<FavoritFilmsContent/>}/>
                <Route path='/SearchResultContent' element={<SearchResultContent/>}/>
                <Route path='/TrendsContent' element={<TrendsContent/>}/>
                <Route path='/SignUp' element={<SignUpPanel/>}/>
                <Route path='/SignIn' element={<SignInPanel/>}/>
            </Routes>
        </div>

    )
}

export default Main
