import axios from "axios";

const axiosPublicUrl = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const useAxiosPublic = () => {
  return axiosPublicUrl;
};

export default useAxiosPublic;
