import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const LandingScreen = () => {
  return (
    <>
      <div className="w-full h-[calc(100vh-55px)] bg-black flex items-center justify-center">
        <div className="w-[97%] h-full bg-black flex flex-col items-center">
          <Fade direction="up" triggerOnce={true}>
            <div className="font-[Zah] max-sm:mt-32 text-8xl text-white uppercase max-md:text-6xl max-sm:text-4xl mt-44">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-orange-300">
                Watpad
              </span>
            </div>
          </Fade>
          <Fade direction="down" triggerOnce={true}>
            <div className="text-white font-[Zah] max-sm:text-[10px] max-md:text-[12px] md:text-[15px] mt-1">
              Write your own world...
            </div>
          </Fade>
          <div className="flex mt-5">
            <Link to="/auth/register">
              <button className="max-sm:text-[11px] font-bold px-4 py-2 rounded-md bg-orange-500 text-white">
                Start Writing
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingScreen;
