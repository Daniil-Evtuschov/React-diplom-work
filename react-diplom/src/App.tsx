import './App.css';
import Aside from './pages/aside/aside';
import Main from './pages/main/main';

function App() {
  return (
      <div className="App">      
        <div className='container'>
            <Aside/>
            <Main/>
        </div>
      </div>
  );
}

export default App;