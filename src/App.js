import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { Navigation } from './components/navigation';

function App() {
  return (
    <div className="App">
      <Home/>
      <Navigation />
    </div>
  );
}

export default App;
