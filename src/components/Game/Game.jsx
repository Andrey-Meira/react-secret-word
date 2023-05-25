import styles from "./Game.module.css";

const Game = ({ word, category, letters, setGameStage }) => {
  return (
    <div>
      <h1>Game</h1>
      <h1>{word}</h1>
      <h1>{category}</h1>
      <button onClick={() => setGameStage(3)}>Começar o jogo</button>
    </div>
  );
};

export default Game;
