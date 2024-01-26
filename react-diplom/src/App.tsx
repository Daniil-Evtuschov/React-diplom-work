import './App.css';
import { BrowserRouter, Router } from 'react-router-dom';
import Aside from './components/aside/aside';
import Main from './pages/main/main';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <div className='container'>
        <Aside/>
        <Main/>
        </div>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
