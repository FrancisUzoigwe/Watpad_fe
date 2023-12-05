import { Triangle } from "react-loader-spinner";
const LoadingScreen = () => {
  return (
    <div
      className="absolute w-full h-screen flex items-center justify-center flex-col"
      style={{ backdropFilter: "blur(20px)" }}
    >
      <Triangle
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <div className="font-[Zah] mt-3">Loading...</div>
    </div>
  );
};

export default LoadingScreen;
