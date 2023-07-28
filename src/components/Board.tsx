import { motion } from "framer-motion";
import { useState, useEffect } from "react";
const socket = io.connect("http://localhost:3001");
import * as io from "socket.io-client";
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
  /*   const [buttonObject, setButtonObject] = useState<object[]>([]);
   */ const [playerPattern, setPlayerPattern] = useState<string[]>([]);
  const [button1State, setButton1State] = useState<boolean>(false);
  const [button2State, setButton2State] = useState<boolean>(false);
  const [button3State, setButton3State] = useState<boolean>(false);
  const [button4State, setButton4State] = useState<boolean>(false);
  const [button5State, setButton5State] = useState<boolean>(false);
  const [button6State, setButton6State] = useState<boolean>(false);
  const [button7State, setButton7State] = useState<boolean>(false);
  const [button8State, setButton8State] = useState<boolean>(false);
  const [button9State, setButton9State] = useState<boolean>(false);

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
    socket.emit("values", { button1, button1State });
  }, [button1]);
  useEffect(() => {
    socket.emit("values", { button2, button2State });
  }, [button2]);
  useEffect(() => {
    socket.emit("values", { button3, button3State });
  }, [button3]);
  useEffect(() => {
    socket.emit("values", { button4, button4State });
  }, [button4]);
  useEffect(() => {
    socket.emit("values", { button5, button5State });
  }, [button5]);
  useEffect(() => {
    socket.emit("values", { button6, button6State });
  }, [button6]);
  useEffect(() => {
    socket.emit("values", { button7, button7State });
  }, [button7]);
  useEffect(() => {
    socket.emit("values", { button8, button8State });
  }, [button8]);
  useEffect(() => {
    socket.emit("values", { button9, button9State });
  }, [button9]);
  useEffect(() => {
    console.log(playerPattern);
  }, [playerPattern]);
  const handleButton1 = () => {
    console.log(name, enemyPlayerName);
    console.log(playerObject);
    console.log(playerObject);
    const playerObj: any = playerObject.find(
      (obj: any) => obj.p1.player1Name == name || obj.p2.player2Name == name
    );
    playerObj.p1.player1Name == name
      ? setButton1(playerObj.p1.player1Value)
      : setButton1(playerObj.p2.player2Value);
    setPlayerPattern([...playerPattern, "A"]);
    setButton1State(true);
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

    setPlayerPattern([...playerPattern, "B"]);

    setButton2State(true);
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

    setPlayerPattern([...playerPattern, "C"]);

    setButton3State(true);
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

    setPlayerPattern([...playerPattern, "D"]);

    setButton4State(true);
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

    setPlayerPattern([...playerPattern, "E"]);

    setButton5State(true);
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

    setPlayerPattern([...playerPattern, "F"]);

    setButton6State(true);
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

    setPlayerPattern([...playerPattern, "G"]);

    setButton7State(true);
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

    setPlayerPattern([...playerPattern, "H"]);

    setButton8State(true);
  };

  const handleButton9 = () => {
    console.log(name, enemyPlayerName);
    console.log(playerObject);
    console.log(playerObject);
    const playerObj: any = playerObject.find(
      (obj: any) => obj.p1.player1Name == name || obj.p2.player2Name == name
    );
    playerObj.p1.player1Name == name
      ? setButton9(playerObj.p1.player1Value)
      : setButton9(playerObj.p2.player2Value);
    setPlayerPattern([...playerPattern, "I"]);
    setButton9State(true);
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
  useEffect(() => {
    socket.on("values", (e) => {
      let buttonObject = e.buttonObj;
      setButton1(buttonObject.b1);
      setButton1State(buttonObject.b1Status);
    });
  }, [button1]);
  useEffect(() => {
    socket.on("values", (e) => {
      let buttonObject = e.buttonObj;
      setButton2(buttonObject.b2);
      setButton2State(buttonObject.b2Status);
    });
  }, [button2]);
  useEffect(() => {
    socket.on("values", (e) => {
      let buttonObject = e.buttonObj;
      setButton3(buttonObject.b3);
      setButton3State(buttonObject.b3Status);
    });
  }, [button3State]);
  useEffect(() => {
    socket.on("values", (e) => {
      let buttonObject = e.buttonObj;
      setButton4(buttonObject.b4);
      setButton4State(buttonObject.b4Status);
    });
  }, [button4]);
  useEffect(() => {
    socket.on("values", (e) => {
      let buttonObject = e.buttonObj;
      setButton5(buttonObject.b5);
      setButton5State(buttonObject.b5Status);
    });
  }, [button5]);
  useEffect(() => {
    socket.on("values", (e) => {
      let buttonObject = e.buttonObj;
      setButton6(buttonObject.b6);
      setButton6State(buttonObject.b6Status);
    });
  }, [button6]);
  useEffect(() => {
    socket.on("values", (e) => {
      let buttonObject = e.buttonObj;
      setButton7(buttonObject.b7);
      setButton7State(buttonObject.b7Status);
    });
  }, [button7]);
  useEffect(() => {
    socket.on("values", (e) => {
      let buttonObject = e.buttonObj;
      setButton8(buttonObject.b8);
      setButton8State(buttonObject.b8Status);
    });
  }, [button8]);
  useEffect(() => {
    socket.on("values", (e) => {
      let buttonObject = e.buttonObj;
      setButton9(buttonObject.b9);
      setButton9State(buttonObject.b9Status);
    });
  }, [button9]);
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
          disabled={button1State}
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
          disabled={button2State}
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
          disabled={button3State}
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
          disabled={button4State}
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
          disabled={button5State}
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
          disabled={button6State}
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
          disabled={button7State}
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
          disabled={button8State}
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
          disabled={button9State}
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center hover:border-[#262730] hover:border-4"
        >
          {button9}
        </motion.button>
      </div>
    </motion.section>
  );
}

export default Board;
