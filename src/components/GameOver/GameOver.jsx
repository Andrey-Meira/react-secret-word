import styles from "./GameOver.module.css";
import Game from "../Game/Game";

const GameOver = ({
  guessesQnty,
  score,
  setGameStage,
  setScore,
  setGuesses,
}) => {
  const retry = () => {
    setScore(0);
    setGuesses(guessesQnty);
    setGameStage(1);
  };

  return (
    <div>
      <h1>Fim de jogo!</h1>
      <h2>
        Sua pontuação foi: <span>{score}</span>
      </h2>
      <button onClick={retry}>Recomeçar o jogo</button>
    </div>
  );
};

export default GameOver;
