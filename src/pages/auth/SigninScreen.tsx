import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoadingScreen from "../../components/private/LoadingScreen";
import { signinApi } from "../../apis/authApi";
import { useDispatch } from "react-redux";
import { mainUser } from "../../global/globalState";

const SigninScreen = () => {
  const Schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const [loading, setLoading] = useState<boolean>(false);
  const onHandleSubmit = handleSubmit(async (data) => {
    const { email, password } = data;
    setLoading(true);
    signinApi({ email, password }).then((res) => {
      dispatch(mainUser(res));
      navigate("/");
    });
  });
  return (
    <div className="w-full h-screen flex justify-center items-center relative bg-black">
      {loading && <LoadingScreen />}
      <form
        className="w-[30%] h-auto rounded-md flex flex-col items-center bg-white"
        onSubmit={onHandleSubmit}
      >
        <div className="font-[Zah] uppercase my-2 text-[20px]">Signin</div>
        <div className="w-full h-auto flex items-center justify-center flex-col my-3">
          <div className="w-[85%] h-[45px] flex border px-2 relative rounded-md">
            <div className="absolute -mt-3 ml-2 font-bold bg-white">
              Email:{" "}
            </div>
            <div className="w-[85%] mt-3 h-[30px] bg-green-300">
              <input
                type="text"
                className="w-full outline-none h-[30px]"
                placeholder="Enter email"
                {...register("email")}
              />
            </div>
          </div>
          {errors.email?.message && (
            <div className="w-[85%] flex justify-end items-center text-[12px] font-[Evergreen] font-bold text-red-600">
              Input a valid email address
            </div>
          )}
        </div>

        <div className="w-full h-auto flex items-center justify-center flex-col my-3">
          <div className="w-[85%] h-[45px] flex border px-2 relative rounded-md">
            <div className="absolute -mt-3 ml-2 font-bold bg-white">
              Password:{" "}
            </div>
            <div className="w-[85%] mt-3 h-[30px] bg-green-300">
              <input
                type="text"
                className="w-full outline-none h-[30px]"
                placeholder="Enter password"
                {...register("password")}
              />
            </div>
          </div>
          {errors.password?.message && (
            <div className="w-[85%] flex justify-end items-center text-[12px] font-[Evergreen] font-bold text-red-600">
              Provide a password
            </div>
          )}
        </div>
        <div className="flex text-[13px]">
          Don't have an account?{" "}
          <Link to="/auth/register">
            <div className="ml-2 underline text-red-500">Signup</div>
          </Link>
        </div>
        <div className="my-4">
          <button
            className="text-white font-[Evergreen] px-4 py-2 max-sm:text-[12px] text-[15px] rounded-md  bg-black "
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SigninScreen;
