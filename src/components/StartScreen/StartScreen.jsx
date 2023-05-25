import styles from "./StartScreen.module.css";
import { wordsList } from "../../data/words";
import { useState } from "react";

const StartScreen = ({
  setGameStage,
  setPickedWord,
  setPickedCategory,
  setLetters,
}) => {
  const [words] = useState(wordsList);
  const categories = Object.keys(words);

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
    <div className={styles.start}>
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button onClick={() => startGame()}>Começar o jogo</button>
    </div>
  );
};

export default StartScreen;
