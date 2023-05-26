import { useEffect, useRef, useState } from "react";
import styles from "./Game.module.css";
import StartScreen from "../StartScreen/StartScreen";

const Game = ({
  word,
  score,
  guesses,
  category,
  letters,
  startGame,
  setGameStage,
  setScore,
  setGuesses,
}) => {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [worngLetters, setWrongLetters] = useState([]);
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter();
  };

  const verifyLetter = () => {
    const normalizedLetter = letter.toLowerCase();

    if (
      guessedLetters.includes(normalizedLetter) ||
      worngLetters.includes(normalizedLetter)
    ) {
      setLetter("");
      return;
    }

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualLetters) => [
        ...actualLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }

    setLetter("");
    letterInputRef.current.focus();
  };

  useEffect(() => {
    if (guesses === 0) {
      clearLetterStates();
      setGameStage(3);
    }
  }, [guesses]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    if (uniqueLetters.length === guessedLetters.length) {
      setScore((actualScore) => actualScore += 100);
      clearLetterStates();
      startGame();
    }

  }, [guessedLetters, letters, startGame]);

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  return (
    <div>
      <div className={styles.game}>
        <p className={styles.points}>
          <span>Pontuação: {score}</span>
        </p>
      </div>
      <h1>Adivinhe a palavra:</h1>
      <h3 className={styles.tip}>
        Dica: <span>{category}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas</p>
      <div className={styles.wordContainer}>
        {letters.map((letter, index) =>
          guessedLetters.includes(letter) ? (
            <span key={index} className={styles.letter}>
              {letter}
            </span>
          ) : (
            <span key={index} className={styles.blankSquare}></span>
          )
        )}
      </div>
      <div className={styles.letterContainer}>
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            autoComplete="off"
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button>Jogar</button>
        </form>
      </div>
      <div className={styles.wrongLettersContainer}>
        {worngLetters.length ? <p>Letras já utilizadas</p> : ""}
        {worngLetters.map((wrongLetter, index) => (
          <span key={index}>{wrongLetter}, </span>
        ))}
      </div>
    </div>
  );
};

export default Game;
