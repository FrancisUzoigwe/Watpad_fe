import axios from "axios";

const URL: string = "http://localhost:3400";

export const registerApi = async (data: any) => {
  try {
    return await axios.post(`${URL}/api/register`, data).then((res) => {
      return res.data?.data;
    });
  } catch (error: any) {
    console.log(error?.message);
  }
};

export const signinApi = async (data: any) => {
  try {
    return await axios.post(`${URL}/api/signin`, data).then((res: any) => {
      return res.data?.data;
    });
  } catch (error: any) {
    console.log(error?.message);
  }
};
