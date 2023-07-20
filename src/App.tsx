import "./App.css";
import PlayerForm from "./components/PlayerForm";
import Title from "./components/Title";
import Board from "./components/Board";
import WaitMsg from "./components/WaitMsg";
import GameStatus from "./components/GameStatus";
import { useState } from "react";

function App() {
  const [name, setName] = useState<string>("");
  const [canStart, setCanStart] = useState<boolean>(false);
  const [playerFound, setPlayerFound] = useState<boolean>(false);
  const [enemyPlayerName, setEnemyPlayerName] = useState<string>("");
  const [playerCount, setPlayerCount] = useState<string[]>([]);

  return (
    <div>
      {!canStart ? <Title /> : null}
      {!canStart ? (
        <PlayerForm name={name} setName={setName} setCanStart={setCanStart} />
      ) : null}
      {canStart ? (
        <GameStatus enemyPlayerName={enemyPlayerName} name={name} />
      ) : null}
      {playerFound ? <Board /> : null}
      {canStart ? (
        <WaitMsg
          setPlayerFound={setPlayerFound}
          setEnemyPlayerName={setEnemyPlayerName}
          playerCount={playerCount}
          setPlayerCount={setPlayerCount}
        />
      ) : null}
    </div>
  );
}

export default App;
