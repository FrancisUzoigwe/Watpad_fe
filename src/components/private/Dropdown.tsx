import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { RiMenuFoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [show, setShow] = useState<boolean>(false);
  const onShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div>
        <div
          className="flex-col flex relative"
          onClick={() => {
            onShow();
          }}
        >
          <RiMenuFoldFill className="text-3xl hover:cursor-pointer duration-300 hover:scale-110 transition-all hover:text-orange-500" />
          {show ? (
            <Fade>
              <div className="absolute top-10 right-6 flex flex-col items-center bg-orange-500 px-5 py-3 rounded-md text-center">
                <Link to="/auth/signin">
                  <div className="w-full text-[14px] h-auto my-1 hover:cursor-pointer text-white font-[Evergreen] ">
                    Signin
                  </div>
                </Link>
                <Link to="/auth/register">
                  <div className="w-full text-[14px] h-auto my-1 hover:cursor-pointer text-white font-[Evergreen] ">
                    Signup
                  </div>
                </Link>
              </div>
            </Fade>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
