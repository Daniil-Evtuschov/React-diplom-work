import { Route, Routes } from "react-router-dom"
import TrendsContent from "../../pages/trendsContent/trendsContent"
import Aside from "../../pages/aside/aside"
import Header from "../../pages/header/header"
import MainContent from "../../pages/mainContent/mainContent"
import FavoritFilmsContent from "../../pages/favorite/favoriteContent"
import SearchResultContent from "../../pages/searchresultContent/searchresultContent"
import ActiveFilmCard from "../../pages/activeFilmCard/activeFilmCard"


const PixemaRoutes = ()=>(
    <div style={{display:'flex',flexGrow:'1'}}>
    <Aside/>
        <div style={{flexGrow:'1'}}>
            <header>
                <Header />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<MainContent/>}/>
                    <Route path="/TrendsFilms" element={<TrendsContent/>}/>
                    <Route path="/favoritFilms" element={<FavoritFilmsContent/>}/>
                    <Route path="/SearcFilms" element={<SearchResultContent/>}/>
                    <Route path="/ActiveFilmCard/:id" element={<ActiveFilmCard/>}/>
                </Routes>
            </main>
        </div>
    </div>
    )
export default PixemaRoutes 