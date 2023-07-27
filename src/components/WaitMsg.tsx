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
  name: string;
  setEnemyPlayerName: (open: string) => void;
  setPlayerValue: (open: string) => void;
  setEnemyValue: (open: string) => void;
  /* obj: object; */
  setPlayerObject: (open: object[]) => void;

  playerObject: object[];
};

function WaitMsg({
  setPlayerFound,
  setEnemyPlayerName,
  setPlayerValue,
  setEnemyValue,
  name,
  setPlayerObject,
}: /*  setEnemyPlayerName,
  enemyPlayerName, */
/* setEnemyPlayerName,
  playerCount,
  setPlayerCount, */
StartProps) {
  //Place here a side effect than hides this component when there is a second player
  useEffect(() => {
    socket.on("send_name", (e) => {
      let allPlayersArray = e.allPlayers.slice(-1);
      let nameArray = e.nameArray;
      console.log(allPlayersArray[0].p1 /* .p1 */);
      if (nameArray.length >= 2) {
        setPlayerFound(true);

        console.log(allPlayersArray);
        const playerObj = allPlayersArray.find(
          (obj: any) => obj.p1.player1Name == name || obj.p2.player2Name == name
        );
        setPlayerObject(allPlayersArray);

        console.log(playerObj.p1.player1Name);
        {
          playerObj.p1.player1Name == name
            ? setEnemyPlayerName(playerObj.p2.player2Name)
            : setEnemyPlayerName(playerObj.p1.player1Name);
        }
        {
          //Current Problem Here
          playerObj.p1.player1Name == name
            ? setPlayerValue(playerObj.p1.player1Value)
            : setPlayerValue(playerObj.p2.player2Value);

          playerObj.p2.player2Name !== name
            ? setEnemyValue(playerObj.p2.player2Value)
            : setEnemyValue(playerObj.p1.player1Value);
        }
        /*   let onScreenPlayer = allPlayersArray.find((obj: any) => {
          obj.p1.player1Name == `${name}` || obj.p2.player2Name == `${name}`;
        }); */

        /*   let onScreenPlayer = nameArray.filter(
          (player: string) => player == name
        ); */
        /*         let enemyPlayer = nameArray.filter((player: string) => player !== name);
         */
        /* let enemyPlayer = allPlayersArray.find((obj: any) => {
          obj.p1.player1Name !== `${name}` || obj.p2.player2Name !== `${name}`;
        }); */

        /* console.log(`you are ${onScreenPlayer}`); */
        /* console.log(`you are against ${enemyPlayer}`); */
        console.log(nameArray);
        /*   setEnemyPlayerName(enemyPlayer); */
        /* setUserList(userList.filter((user) => user.id !== id)); */
      }

      /* let enemyPlayer;
      let playerValue;
      const playerObj = allPlayersArray.find(
        (obj: any) =>
          obj.p1.player1Name == `${name}` || obj.p2.player2Name == `${name}`
      );
      playerObj.p1.player1Name = `${name}`
        ? (enemyPlayer = playerObj.p2.player2Name)
        : (enemyPlayer = playerObj.p1.player1Name);
      playerObj.p1.player1Value = `${name}`
        ? (playerValue = playerObj.p2.player2Value)
        : (playerValue = playerObj.p1.player1Value);
      setEnemyPlayerName(enemyPlayer);
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
