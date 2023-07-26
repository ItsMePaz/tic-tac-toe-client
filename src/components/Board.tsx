import { motion } from "framer-motion";
/* import { useState, useEffect } from "react"; */
/* const socket = io.connect("http://localhost:3001");
import * as io from "socket.io-client"; */
type PlayerName = {
  enemyPlayerName: string;
  name: string;
  playerValue: string;
  enemyValue: string;
  player1Object: object[];
  player2Object: object[];

  /*  setPlayer1ObjectAgain: (open: object[]) => void;
  player1ObjectAgain: object[]; */
};
/* type BoardButton = {}; */
function Board({
  name,
  enemyPlayerName,
  player1Object,
  player2Object,
}: PlayerName) {
  /*   const [player1ObjectAgain, setPlayer1ObjectAgain] = useState<object[]>([]);
   */ /* const [button1, setButton1] = useState<string>(""); */
  /* const [button2, setButton2] = useState<string>(""); */
  /*  const [button3, setButton3] = useState<string>(""); */
  /* const [button4, setButton4] = useState<string>(""); */
  /* const [button5, setButton5] = useState<string>(""); */
  /* const [button6, setButton6] = useState<string>(""); */
  /* const [button7, setButton7] = useState<string>(""); */
  /* const [button8, setButton8] = useState<string>(""); */
  /* const [button9, setButton9] = useState<string>(""); */
  const handleButton1 = () => {
    console.log(name, enemyPlayerName);
    console.log(player1Object, player2Object);
    /*     let player1Names = player1Object.player1Name; */
    console.log(player2Object.p1.player1Name);
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
          {/* x */}
        </motion.button>
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
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center hover:border-[#262730] hover:border-4"
        >
          {/* <img className="scale-90 bg-transparent" src={cancel} alt="" /> */}
        </motion.button>
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
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center hover:border-[#262730] hover:border-4"
        >
          {/* 1 */}
        </motion.button>
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
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center hover:border-[#262730] hover:border-4"
        >
          {/* 1 */}
        </motion.button>
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
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center hover:border-[#262730] hover:border-4"
        >
          {/* 1 */}
        </motion.button>
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
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center hover:border-[#262730] hover:border-4"
        >
          {/* 1 */}
        </motion.button>
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
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center hover:border-[#262730] hover:border-4"
        >
          {/* 1 */}
        </motion.button>
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
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center hover:border-[#262730] hover:border-4"
        >
          {/* 1 */}
        </motion.button>
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
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center hover:border-[#262730] hover:border-4"
        >
          {/* 1 */}
        </motion.button>
      </div>
    </motion.section>
  );
}

export default Board;
