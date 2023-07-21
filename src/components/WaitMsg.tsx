import loading from "../images/magnifying.gif";
import * as io from "socket.io-client";
import { useEffect } from "react";
const socket = io.connect("http://localhost:3001");

type StartProps = {
  playerFound: boolean;
  setPlayerFound: (open: boolean) => void;
  enemyPlayerName: string;
  setPlayerCount: (open: string[]) => void;
  playerCount: string[];

  setEnemyPlayerName: (open: string) => void;
  /* obj: object; */
};

function WaitMsg({
  setPlayerFound,
  setEnemyPlayerName,
}: /*  setEnemyPlayerName,
  enemyPlayerName, */
/* setEnemyPlayerName,
  playerCount,
  setPlayerCount, */
StartProps) {
  //Place here a side effect than hides this component when there is a second player
  useEffect(() => {
    socket.on("send_name", (e) => {
      let allPlayersArray = e.allPlayers;
      let nameArray = e.nameArray;
      console.log(allPlayersArray);
      if (nameArray.length >= 2) {
        setPlayerFound(true);
        setEnemyPlayerName(nameArray[1]);
      }

      /* let enemyName;
      let playerValue;
      const foundObj = allPlayersArray.find(
        (obj: any) =>
          obj.p1.player1Name == `${name}` || obj.p2.player2Name == `${name}`
      );
      foundObj.p1.player1Name = `${name}`
        ? (enemyName = foundObj.p2.player2Name)
        : (enemyName = foundObj.p1.player1Name);
      foundObj.p1.player1Value = `${name}`
        ? (playerValue = foundObj.p2.player2Value)
        : (playerValue = foundObj.p1.player1Value);
      setEnemyPlayerName(enemyName);
      console.log(playerValue);
      setPlayerFound(true); */
      /*   let name: string = data.name;
      setEnemyPlayerName(name);
      setPlayerCount([...playerCount, name]);
      if (playerCount.length > 1) {
        setPlayerFound(true);
      }
      console.log(playerCount); */
    });
    console.log("playerFound");
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
