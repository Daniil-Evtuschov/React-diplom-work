import { useSelector } from 'react-redux';
import './App.css';
import Aside from './pages/aside/aside';
import Main from './pages/main/main';
import { InitialStateInt } from './interfases';

function App() {
const theme = useSelector((state:InitialStateInt)=>state.theme);

  return (
      <div className="App" id={theme}>      
        <div className='container'>
            <Aside/>
            <Main/>
        </div>
      </div>
  );
}

export default App;