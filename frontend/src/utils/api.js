// //centeralized API setup

// import axios from "axios";
// import qs from "qs";
// console.log("ENV:", import.meta.env.VITE_API_URL);
// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL + "/api",
//   withCredentials: true,
//   paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "repeat" }),
// });

// export default api;

import axios from "axios";
import qs from "qs";

const api = axios.create({
  baseURL: import.meta.env.DEV
    ? "/api"
    : `${import.meta.env.VITE_API_URL}/api`,
  withCredentials: true,
  paramsSerializer: (params) =>
    qs.stringify(params, { arrayFormat: "repeat" }),
});

export default api;