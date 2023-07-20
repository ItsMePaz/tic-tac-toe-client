import "../components/framer-motion-source-files/styles.css";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../components/framer-motion-source-files/use-follow-pointer";

function WaitFidget() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="box"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 50,
        restDelta: 0.001,
      }}
    />
  );
}

export default WaitFidget;
