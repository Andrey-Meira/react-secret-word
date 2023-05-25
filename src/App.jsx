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
  const guessesQnty = 3;

  const [gameStage, setGameStage] = useState(stages[0].id);
  const [word, setPickedWord] = useState();
  const [category, setPickedCategory] = useState();
  const [letters, setLetters] = useState();
  const [guesses, setGuesses] = useState(guessesQnty);
  const [score, setScore] = useState(0);

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
          score={score}
          guesses={guesses}
          setGameStage={setGameStage}
          setScore={setScore}
          setGuesses={setGuesses}
        />
      )}
      {gameStage === 3 && (
        <GameOver
          guessesQnty={guessesQnty}
          score={score}
          setGameStage={setGameStage}
          setScore={setScore}
          setGuesses={setGuesses}
        />
      )}
    </div>
  );
}

export default App;
