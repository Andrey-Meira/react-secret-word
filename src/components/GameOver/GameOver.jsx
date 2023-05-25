import styles from "./GameOver.module.css";

const GameOver = ({ setGameStage }) => {
  return (
    <div>
      <h1>GameOver</h1>
      <button onClick={() => setGameStage(1)}>Começar o jogo</button>
    </div>
  );
};

export default GameOver;
