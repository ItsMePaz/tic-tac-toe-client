import "./App.css";
import PlayerForm from "./components/PlayerForm";
import Title from "./components/Title";
import Board from "./components/Board";
import WaitMsg from "./components/WaitMsg";
import { useState } from "react";

function App() {
  const [name, setName] = useState<string>("");
  const [canStart, setCanStart] = useState<boolean>(false);

  return (
    <div>
      {!canStart ? <Title /> : null}
      {!canStart ? (
        <PlayerForm name={name} setName={setName} setCanStart={setCanStart} />
      ) : null}
      {/*   {canStart ? <Board /> : null} */}
      {canStart ? <WaitMsg /> : null}
    </div>
  );
}

export default App;
