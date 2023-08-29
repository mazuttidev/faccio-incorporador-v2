import './App.css';
import { Wrapper } from './components/Wrappper';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Wrapper children={<Home/>} />
    </div>
  );
}

export default App;
