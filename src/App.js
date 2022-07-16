import { Route, Routes } from "react-router-dom";
import "./App.css";
import FinalBoard from "./components/FinalBoard";
import GameBoard from "./components/GameBoard";
import OpeningPage from "./components/OpeningPage";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<OpeningPage />} />
      <Route path="/question/:questionId" element={<GameBoard />} />
      <Route path="/final" element={<FinalBoard />} />
    </Routes>
    </div>
  );
}

export default App;
