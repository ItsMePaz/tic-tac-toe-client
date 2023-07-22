import { motion } from "framer-motion";
import { useEffect } from "react";

type NameProp = {
  enemyPlayerName: string;
  name: string;
  setHideStatus: (open: boolean) => void;
  hideStatus: boolean;
};

function GameStatus({
  enemyPlayerName,
  setHideStatus,
  hideStatus /* name  */,
}: NameProp) {
  useEffect(() => {
    const hideGameStatus = () => {
      setHideStatus(false);
      console.log(hideStatus);
    };
    setTimeout(hideGameStatus, 5000);
  }, []);
  return (
    <motion.div
      id="removeStatus"
      transition={{ delay: 1.5 }}
      initial={{ y: "1000px" }}
      animate={{ y: "0" }}
      /*   initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }} */
      className="fixed flex justify-center items-center h-screen z-10 w-screen bg-transparent text-center "
    >
      <div className="bg-[#77BA99] w-[45vh] p-[3vh] rounded-xl border-4 border-black">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.8,
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="text-[#fcfdfd]  font-[Rubik] text-4xl bg-transparent"
        >
          You
        </motion.h1>
        <h1 className="text-[#262730] font-[Rubik] text-4xl bg-transparent">
          VS
        </h1>
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 2.6,
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.04],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="text-[#D33F49] font-[Rubik] text-4xl bg-transparent "
        >
          {enemyPlayerName}
        </motion.h1>
      </div>
      {/* <h1 className="text-white font-[Rubik] text-4xl bg-transparent">
        {enemyPlayerName}
      </h1> */}
    </motion.div>
  );
}

export default GameStatus;
