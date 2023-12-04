import { Link } from "react-router-dom";
import Dropdown from "../private/Dropdown";
const FirstHeader = () => {
  return (
    <header className="w-full h-[55px] bg-black flex justify-center items-center ">
      <div className="w-[95%] h-full flex justify-between items-center fixed">
        <div className="text-white uppercase font-[Zah] hover:text-orange-500 transition-all duration-300 hover:cursor-pointer">
          Watpad
        </div>
        <div className="flex items-center ">
          <Link to="/auth/signin ">
            <button className="text-white max-md:hidden">Signin</button>
          </Link>
          <Link to="/auth/register">
            <button className="ml-5 px-4 py-[6px] rounded-md bg-orange-500 hover:bg-white hover:cursor-pointer hover:text-orange-500 transition-all duration-500 text-white max-md:hidden">
              Get Started
            </button>
          </Link>
          <div className="hidden max-md:block text-white">
            <Dropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FirstHeader;
