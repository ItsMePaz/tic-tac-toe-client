import "./App.css";
import PlayerForm from "./components/PlayerForm";
import Title from "./components/Title";
import Board from "./components/Board";
import WaitMsg from "./components/WaitMsg";
import GameStatus from "./components/GameStatus";
import GameSet from "./components/GameSet";
import { useState } from "react";

function App() {
  const [name, setName] = useState<string>("");
  const [canStart, setCanStart] = useState<boolean>(false);
  const [playerFound, setPlayerFound] = useState<boolean>(false);
  const [enemyPlayerName, setEnemyPlayerName] = useState<string>("");
  const [playerCount, setPlayerCount] = useState<string[]>([]);
  const [hideStatus, setHideStatus] = useState<boolean>(true);
  const [enemyValue, setEnemyValue] = useState<string>("");
  const [playerValue, setPlayerValue] = useState<string>("");
  const [playerObject, setPlayerObject] = useState<object[]>([]);
  const [playerTurnName, setPlayerTurnName] = useState<string>("");
  return (
    <div>
      {!hideStatus ? (
        <GameSet
          enemyPlayerName={enemyPlayerName}
          name={name}
          enemyValue={enemyValue}
          playerValue={playerValue}
        />
      ) : null}
      {!canStart ? <Title /> : null}
      {!canStart ? (
        <PlayerForm name={name} setName={setName} setCanStart={setCanStart} />
      ) : null}
      {playerFound && hideStatus ? (
        <GameStatus
          enemyPlayerName={enemyPlayerName}
          name={name}
          setHideStatus={setHideStatus}
          hideStatus={hideStatus}
        />
      ) : null}
      {playerFound ? (
        <Board
          playerTurnName={playerTurnName}
          name={name}
          enemyPlayerName={enemyPlayerName}
          playerValue={playerValue}
          enemyValue={enemyValue}
          playerObject={playerObject}
        />
      ) : null}
      {canStart ? (
        <WaitMsg
          enemyPlayerName={enemyPlayerName}
          setPlayerFound={setPlayerFound}
          setEnemyPlayerName={setEnemyPlayerName}
          playerCount={playerCount}
          playerFound={playerFound}
          setPlayerCount={setPlayerCount}
          name={name}
          setPlayerValue={setPlayerValue}
          setEnemyValue={setEnemyValue}
          playerObject={playerObject}
          setPlayerObject={setPlayerObject}
          setPlayerTurnName={setPlayerTurnName}
        />
      ) : null}
    </div>
  );
}

export default App;
