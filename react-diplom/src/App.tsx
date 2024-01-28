import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Aside from './components/aside/aside';
import ActiveFilmCard from './pages/activeFilCard/activeFilmCard';
import Header from './pages/header/header';
import Main from './pages/main/main';

function App() {
  return (
    <div className="App">      
        <div className='container'>
          <BrowserRouter>
          <Aside/>
            <Routes>
              <Route path='/home' element={<Main/>}/>
              <Route path='/ActiveFilmCard' element={<ActiveFilmCard/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
