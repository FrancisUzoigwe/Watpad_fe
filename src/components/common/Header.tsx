import { useDispatch } from "react-redux";
// import { logOut } from "../../global/globalState";
const Header = () => {
  // const dispatch = useDispatch();
  // onClick={() => {
  //   dispatch(logOut());
  // }}
  return (
    <header className="w-full h-[55px] justify-center items-center flex ">
      <div className="w-[95%] flex justify-between items-center">
        <div className="text-black uppercase font-[Zah] hover:text-orange-500 transition-all duration-300 hover:cursor-pointer">
          Watpad
        </div>
        <div className=" flex-col flex items-end hover:cursor-pointer">
          <div className="font-[Zah]">Kossyrisochuwku</div>
          <div className="font-[Evergreen] text-[11px]">kossuzoigwe@gmail.com</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
