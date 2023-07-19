import { motion } from "framer-motion";
import cancel from "../images/cancel.png";

function Board() {
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
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center "
        >
          x
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
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center"
        >
          <img className="scale-90" src={cancel} alt="" />
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
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center"
        >
          1
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
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center"
        >
          1
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
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center"
        >
          1
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
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center"
        >
          1
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
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center"
        >
          1
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
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center"
        >
          1
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
          className="h-[10vh] bg-[#e9d9e4] w-[10vh] rounded-xl place-self-center"
        >
          1
        </motion.button>
      </div>
    </motion.section>
  );
}

export default Board;
