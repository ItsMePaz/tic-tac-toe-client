import cancel from "../images/cancel.png";
import toe from "../images/o.png";
import { motion } from "framer-motion";

function Title() {
  return (
    <div
      className="fixed ml-[50%] translate-x-[-50%] mt-[15vh] flex flex-col z-10"
      id="title"
    >
      {" "}
      <div className="flex flex-row justify-center">
        <motion.div
          className="box"
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
        >
          {" "}
          <img className="h-[10vh]" src={cancel} alt="" />
        </motion.div>
        <motion.div
          className="box bg-gradient-to-r"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.4,
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <img className="h-[10vh] mx-[2vh]" src={toe} alt="" />
        </motion.div>

        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 2.1,
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          {" "}
          <img className="h-[10vh]" src={cancel} alt="" />
        </motion.div>
      </div>
      <motion.div
        transition={{ delay: 2.3 }}
        initial={{ x: "1000px" }}
        animate={{ x: "0" }}
        className="mt-[5vh] flex "
      >
        <h1 className="text-white font-[Rubik] text-4xl ">TIC</h1>
        <h1 className="text-white font-[Rubik] text-4xl mx-[3vh]">TAC</h1>
        <h1 className="text-white font-[Rubik] text-4xl ">TOE</h1>
      </motion.div>
    </div>
  );
}

export default Title;
