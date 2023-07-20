import loading from "../images/magnifying.gif";

function WaitMsg() {
  //Place here a side effect than hides this component when there is a second player
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
