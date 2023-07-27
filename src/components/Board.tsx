import { motion } from "framer-motion";
import { useState, useEffect } from "react";
/* const socket = io.connect("http://localhost:3001");
import * as io from "socket.io-client"; */
type PlayerName = {
  enemyPlayerName: string;
  name: string;
  playerValue: string;
  enemyValue: string;
  playerObject: object[];
  /*   playerPattern: string[];
  setPlayerPattern: (open: string[]) => void; */

  /*  setplayerObjectAgain: (open: object[]) => void;
  playerObjectAgain: object[]; */
};
/* type BoardButton = {}; */
function Board({ name, enemyPlayerName, playerObject }: PlayerName) {
  /*   const [playerObjectAgain, setplayerObjectAgain] = useState<object[]>([]);*/
  const [playerPattern, setPlayerPattern] = useState<string[]>([]);
  const [button1, setButton1] = useState<string>("");

  const [button2, setButton2] = useState<string>("");
  const [button3, setButton3] = useState<string>("");
  const [button4, setButton4] = useState<string>("");
  const [button5, setButton5] = useState<string>("");
  const [button6, setButton6] = useState<string>("");
  const [button7, setButton7] = useState<string>("");
  const [button8, setButton8] = useState<string>("");
  const [button9, setButton9] = useState<string>("");
  useEffect(() => {
    console.log(playerPattern);
  }, [playerPattern]);
  const handleButton1 = () => {
    console.log(name, enemyPlayerName);
    console.log(playerObject);
    /*     let player1Names = playerObject.player1Name; */
    console.log(playerObject);
    const playerObj: any = playerObject.find(
      (obj: any) => obj.p1.player1Name == name || obj.p2.player2Name == name
    );
    playerObj.p1.player1Name == name
      ? setButton1(playerObj.p1.player1Value)
      : setButton1(playerObj.p2.player2Value);
    setPlayerPattern([...playerPattern, "1"]);
    /*     playerObj.p1.player1Name == name
      ? setPlayerPattern([...playerPattern, "1"])
      : setPlayerPattern([...playerPattern, "1"]); */
  };

  const handleButton2 = () => {
    console.log(name, enemyPlayerName);
    console.log(playerObject);
    /*     let player1Names = playerObject.player1Name; */
    console.log(playerObject);
    const playerObj: any = playerObject.find(
      (obj: any) => obj.p1.player1Name == name || obj.p2.player2Name == name
    );
    playerObj.p1.player1Name == name
      ? setButton2(playerObj.p1.player1Value)
      : setButton2(playerObj.p2.player2Value);

    playerObj.p1.player1Name == name
      ? setPlayerPattern((newValue) => [...newValue, "2"])
      : null;

    console.log(playerPattern);
  };

  const handleButton3 = () => {
    console.log(name, enemyPlayerName);
    console.log(playerObject);
    /*     let player1Names = playerObject.player1Name; */
    console.log(playerObject);
    const playerObj: any = playerObject.find(
      (obj: any) => obj.p1.player1Name == name || obj.p2.player2Name == name
    );
    playerObj.p1.player1Name == name
      ? setButton3(playerObj.p1.player1Value)
      : setButton3(playerObj.p2.player2Value);

    playerObj.p1.player1Name == name
      ? setPlayerPattern((newValue) => [...newValue, "3"])
      : null;

    console.log(playerPattern);
  };

  const handleButton4 = () => {
    console.log(name, enemyPlayerName);
    console.log(playerObject);
    /*     let player1Names = playerObject.player1Name; */
    console.log(playerObject);
    const playerObj: any = playerObject.find(
      (obj: any) => obj.p1.player1Name == name || obj.p2.player2Name == name
    );
    playerObj.p1.player1Name == name
      ? setButton4(playerObj.p1.player1Value)
      : setButton4(playerObj.p2.player2Value);

    playerObj.p1.player1Name == name
      ? setPlayerPattern((newValue) => [...newValue, "4"])
      : null;

    console.log(playerPattern);
  };

  const handleButton5 = () => {
    console.log(name, enemyPlayerName);
    console.log(playerObject);
    /*     let player1Names = playerObject.player1Name; */
    console.log(playerObject);
    const playerObj: any = playerObject.find(
      (obj: any) => obj.p1.player1Name == name || obj.p2.player2Name == name
    );
    playerObj.p1.player1Name == name
      ? setButton5(playerObj.p1.player1Value)
      : setButton5(playerObj.p2.player2Value);

    playerObj.p1.player1Name == name
      ? setPlayerPattern((newValue) => [...newValue, "5"])
      : null;

    console.log(playerPattern);
  };

  const handleButton6 = () => {
    console.log(name, enemyPlayerName);
    console.log(playerObject);
    /*     let player1Names = playerObject.player1Name; */
    console.log(playerObject);
    const playerObj: any = playerObject.find(
      (obj: any) => obj.p1.player1Name == name || obj.p2.player2Name == name
    );
    playerObj.p1.player1Name == name
      ? setButton6(playerObj.p1.player1Value)
      : setButton6(playerObj.p2.player2Value);

    playerObj.p1.player1Name == name
      ? setPlayerPattern((newValue) => [...newValue, "6"])
      : null;

    console.log(playerPattern);
  };

  const handleButton7 = () => {
    console.log(name, enemyPlayerName);
    console.log(playerObject);
    /*     let player1Names = playerObject.player1Name; */
    console.log(playerObject);
    const playerObj: any = playerObject.find(
      (obj: any) => obj.p1.player1Name == name || obj.p2.player2Name == name
    );
    playerObj.p1.player1Name == name
      ? setButton7(playerObj.p1.player1Value)
      : setButton7(playerObj.p2.player2Value);

    playerObj.p1.player1Name == name
      ? setPlayerPattern((newValue) => [...newValue, "7"])
      : null;

    console.log(playerPattern);
  };

  const handleButton8 = () => {
    console.log(name, enemyPlayerName);
    console.log(playerObject);
    /*     let player1Names = playerObject.player1Name; */
    console.log(playerObject);
    const playerObj: any = playerObject.find(
      (obj: any) => obj.p1.player1Name == name || obj.p2.player2Name == name
    );
    playerObj.p1.player1Name == name
      ? setButton8(playerObj.p1.player1Value)
      : setButton8(playerObj.p2.player2Value);

    playerObj.p1.player1Name == name
      ? setPlayerPattern((newValue) => [...newValue, "8"])
      : null;

    console.log(playerPattern);
  };

  const handleButton9 = () => {
    console.log(name, enemyPlayerName);
    console.log(playerObject);
    /*     let player1Names = playerObject.player1Name; */
    console.log(playerObject);
    const playerObj: any = playerObject.find(
      (obj: any) => obj.p1.player1Name == name || obj.p2.player2Name == name
    );
    playerObj.p1.player1Name == name
      ? setButton9(playerObj.p1.player1Value)
      : setButton9(playerObj.p2.player2Value);

    playerObj.p1.player1Name == name
      ? setPlayerPattern((newValue) => [...newValue, "9"])
      : null;

    console.log(playerPattern);
  };
  /*   useEffect(() => {
    socket.on("send_name", (e) => {
      let allPlayersArray = e.allPlayers.slice(-1);
      let nameArray = e.nameArray;
      if (nameArray.length >= 2) {
        const playerObj = allPlayersArray.find(
          (obj: any) => obj.p1.player1Name == name || obj.p2.player2Name == name
        );
        console.log(`hey ${playerObj.p1.player1Name}`);
      }
    });
  }, [socket]); */
  return (
    <motion.section
      transition={{ delay: 0.3 }}
      initial={{ y: "1000px" }}
      animate={{ y: "0" }}
      className="flex justify-center items-center h-screen z-0 "
    >
      {" "}
      <div className="grid grid-rows-3 grid-cols-3 bg-[#D33F49] p-[2vh] w-[40vh] h-[40vh] rounded-2xl">
        {/* button1 */}{" "}
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          onClick={handleButton1}
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center hover:border-[#262730] hover:border-4"
        >
          {button1}
        </motion.button>
        {/* button2 */}{" "}
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          onClick={handleButton2}
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center hover:border-[#262730] hover:border-4"
        >
          {button2}{" "}
        </motion.button>
        {/* button3 */}{" "}
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          onClick={handleButton3}
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center hover:border-[#262730] hover:border-4"
        >
          {button3}
        </motion.button>
        {/* button4 */}
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.7,
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          onClick={handleButton4}
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center hover:border-[#262730] hover:border-4"
        >
          {button4}
        </motion.button>
        {/* button5 */}
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          onClick={handleButton5}
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center hover:border-[#262730] hover:border-4"
        >
          {button5}
        </motion.button>
        {/* button6 */}
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.9,
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          onClick={handleButton6}
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center hover:border-[#262730] hover:border-4"
        >
          {button6}
        </motion.button>
        {/* button7 */}
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.0,
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          onClick={handleButton7}
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center hover:border-[#262730] hover:border-4"
        >
          {button7}
        </motion.button>
        {/* button8 */}
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.1,
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          onClick={handleButton8}
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center hover:border-[#262730] hover:border-4"
        >
          {button8}
        </motion.button>
        {/* button9 */}
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.2,
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          onClick={handleButton9}
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center hover:border-[#262730] hover:border-4"
        >
          {button9}
        </motion.button>
      </div>
    </motion.section>
  );
}

export default Board;
