import { motion } from "framer-motion";

type PostProps = {
  name: string;
  setName: (open: string) => void;

  setCanStart: (open: boolean) => void;
};

function PlayerForm({ name, setName, setCanStart }: PostProps) {
  function handleStart(e: any) {
    e.preventDefault();
    setCanStart(true);
    console.log(name);
  }

  /*  useEffect(() => {
    if (canStart == true) formStart.style.display = "none";
  }, [canStart]); */
  return (
    <motion.div
      id="formStart"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 2.5,
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
      className="flex justify-center items-center h-screen z-0"
    >
      <form
        onSubmit={handleStart}
        className="flex flex-col items-center justify-center h-[20vh] bg-[#77BA99] w-[80%] rounded-xl drop-shadow-[0px_1px_0px_rgba(150,255,203,1)]"
      >
        <input
          className="rounded-md text-center bg-white font-[Rubik]"
          type="text"
          name="name"
          placeholder="Input player name here"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <motion.button
          whileHover={{ scale: 1.2 }}
          className="mt-[3.5vh] mb-[-3vh] bg-[#15291E] py-[1vh] px-[1.8vh] rounded-full text-white font-[Rubik]"
          onClick={handleStart}
        >
          START MATCH!
        </motion.button>
      </form>
    </motion.div>
  );
}

export default PlayerForm;

{
  /* <motion.div
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
 */
}
