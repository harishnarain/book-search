import axios from "axios";

const instance = axios.create({
  baseURL: "https://cryptic-springs-62387.herokuapp.com/api/books/",
});

export default instance;
