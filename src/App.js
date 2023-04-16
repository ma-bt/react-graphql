
import './App.css';
import { Route , Routes} from 'react-router-dom';
import CharacterList from './pages/CharacterList';
import Character from './pages/Character';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route   path='/' Component={CharacterList}/>
      <Route   path='/:id' Component={Character}/>
      </Routes>
     
    </div>
  );
}

export default App;
