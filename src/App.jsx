import "./App.css";
import { useState } from "react";
import Game from "./components/Game/Game";
import GameOver from "./components/GameOver/GameOver";
import StartScreen from "./components/StartScreen/StartScreen";
import { wordsList } from "./data/words";

const stages = [
  { id: 1, name: "Start" },
  { id: 2, name: "Game" },
  { id: 3, name: "End" },
];

function App() {
  const guessesQnty = 3;

  const [words] = useState(wordsList);
  const categories = Object.keys(words);

  const [gameStage, setGameStage] = useState(stages[0].id);
  const [word, setPickedWord] = useState();
  const [category, setPickedCategory] = useState();
  const [letters, setLetters] = useState();
  const [guesses, setGuesses] = useState(guessesQnty);
  const [score, setScore] = useState(0);

  const startGame = () => {
    let { word, category } = pickRandomWordAndCategory();
    word = word.toLowerCase();
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(word.split(""));
    setGameStage(2);
  };

  const pickRandomWordAndCategory = () => {
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  return (
    <div className="main_content">
      {gameStage === 1 && (
        <StartScreen
          startGame={startGame}
        />
      )}
      {gameStage === 2 && (
        <Game
          word={word}
          category={category}
          letters={letters}
          score={score}
          guesses={guesses}
          startGame={startGame}
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
