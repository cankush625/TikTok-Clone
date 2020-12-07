import axios from "axios";

const instance = axios.create({
    baseUrl: "https://tiktok-clone-app-backend.herokuapp.com/",
});

export default instance;