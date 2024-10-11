import axios from "axios";
const instance = axios.create({
  // baseURL: "http://localhost:5500/api",
    baseURL:"https://evangadi-forum-group-work.onrender.com/api"
});
export default instance;
