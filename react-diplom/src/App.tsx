import { useSelector } from 'react-redux';
import './App.css';
import { InitialStateInt } from './interfases';
import PixemaRoutes from './components/Routes/routes';

function App() {
const theme = useSelector((state:InitialStateInt)=>state.theme);
  return (
      <div className="App" >      
        <div className='container' id={theme}>
          <PixemaRoutes/>
        </div>
      </div>
  );
}

export default App;