
import './App.css';
import FinalBoard from './components/FinalBoard';
import GameBoard from './components/GameBoard'
import TotalTable from './components/TotalTable'

function App() {
  return (
    <div className="App">
      <TotalTable/>
      <FinalBoard/>
      <GameBoard/>
    </div>
  );
}

export default App;
