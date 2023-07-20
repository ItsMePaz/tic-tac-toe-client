import loading from "../images/magnifying.gif";
import * as io from "socket.io-client";
import { useEffect } from "react";
const socket = io.connect("http://localhost:3001");

type StartProps = {
  /* playerFound: boolean; */
  setPlayerFound: (open: boolean) => void;
  /* enemyPlayerName: string; */
  setPlayerCount: (open: string[]) => void;
  playerCount: string[];
  setEnemyPlayerName: (open: string) => void;
};

function WaitMsg({
  setPlayerFound,
  setEnemyPlayerName,
  playerCount,
  setPlayerCount,
}: StartProps) {
  //Place here a side effect than hides this component when there is a second player
  useEffect(() => {
    socket.on("receive_message", (data) => {
      let name: string = data.name;
      setEnemyPlayerName(name);
      setPlayerCount([...playerCount, name]);
      if (playerCount.length > 1) {
        setPlayerFound(true);
      }
      console.log(playerCount);
    });
  }, [socket]);
  return (
    <div>
      {" "}
      <div className="flex flex-col justify-center items-center h-screen z-10 ">
        {" "}
        <img className="bg-transparent h-[10vh] z-10" src={loading} alt="" />
        <h2 className=" text-white font-[Rubik] bg-transparent text-2xl z-10">
          Looking for an opponent
        </h2>
      </div>
    </div>
  );
}

export default WaitMsg;
