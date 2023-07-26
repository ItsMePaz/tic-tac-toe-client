import { motion } from "framer-motion";
import { useEffect } from "react";
import TurnCounter from "./TurnCounter";

type NameProp = {
  enemyPlayerName: string;
  name: string;
  playerValue: string;
  enemyValue: string;
};

function GameSet({ enemyPlayerName, name, playerValue, enemyValue }: NameProp) {
  useEffect(() => {
    console.log(playerValue, enemyValue);
  });
  return (
    <section>
      {" "}
      <motion.div
        transition={{ delay: 0.4 }}
        initial={{ y: "-1000px" }}
        animate={{ y: "0" }}
        className="fixed w-screen justify-center  bg-transparent mt-[14vh] flex  z-10 gap-[10%]"
      >
        <h1 className="w-[20vh] text-white bg-transparent h-[20vh] font-[Rubik] text-2xl">
          {name} <br />
          as {playerValue}
        </h1>

        <h1 className="w-[20vh] text-white bg-transparent h-[20vh]  text-right font-[Rubik] text-2xl">
          {enemyPlayerName} <br /> as {enemyValue}
        </h1>
      </motion.div>
      <div className="fixed w-screen justify-center  text-center bg-transparent mt-[80vh] flex  z-10 gap-[10%]">
        <TurnCounter />
      </div>
    </section>
  );
}

export default GameSet;
