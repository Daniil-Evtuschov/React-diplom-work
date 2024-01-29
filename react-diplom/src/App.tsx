import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Aside from './pages/aside/aside';
import ActiveFilmCard from './pages/activeFilmCard/activeFilmCard';
import Main from './pages/main/main';
import FavoritFilmsContent from './pages/favorite/favoriteContent';
import Header from './pages/header/header';

function App() {
  return (
      <div className="App">      
        <div className='container'>
          <BrowserRouter>
          <Aside/>
            <Routes>
              <Route path='/home' element={<Main/>}/>
              <Route path='/ActiveFilmCard' element={<ActiveFilmCard/>}/>
              <Route path='/favoritFilmsContent' element={<FavoritFilmsContent/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
