import "./App.css";
import { useState } from "react";
import Game from "./components/Game/Game";
import GameOver from "./components/GameOver/GameOver";
import StartScreen from "./components/StartScreen/StartScreen";

const stages = [
  { id: 1, name: "Start" },
  { id: 2, name: "Game" },
  { id: 3, name: "End" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].id);
  const [word, setPickedWord] = useState();
  const [category, setPickedCategory] = useState();
  const [letters, setLetters] = useState();

  return (
    <div className="main_content">
      {gameStage === 1 && (
        <StartScreen
          setPickedWord={setPickedWord}
          setPickedCategory={setPickedCategory}
          setLetters={setLetters}
          setGameStage={setGameStage}
        />
      )}
      {gameStage === 2 && (
        <Game
          word={word}
          category={category}
          letters={letters}
          setGameStage={setGameStage}
        />
      )}
      {gameStage === 3 && <GameOver setGameStage={setGameStage} />}
    </div>
  );
}

export default App;
