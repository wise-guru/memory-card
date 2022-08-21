import './App.css';
import Gameboard from './components/Gameboard';
import Header from './components/Header';

function App() {
  document.title = 'Memory Card';
  return (
    <div className="App">
      <Header />
      <Gameboard />
    </div>
  );
}

export default App;
