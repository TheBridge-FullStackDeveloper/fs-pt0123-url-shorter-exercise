import axios from "axios";

import { register, login, logout } from "./auth";
import { generate } from "./url";
import { basic, shorts } from "./user";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const auth = {
  register: register(client),
  login: login(client),
  logout: logout(client),
};

const url = {
  generate: generate(client),
};

const user = {
  basic: basic(client),
  shorts: shorts(client),
};

export { auth, url, user };
