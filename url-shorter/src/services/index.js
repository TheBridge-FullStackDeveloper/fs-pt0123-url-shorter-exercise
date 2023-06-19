import axios from 'axios';
import { signup } from './auth';
import { signin } from './auth';
import { info } from './user';
import { generator, getLinks } from './short';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true
});

const auth = {
  registro: signup(client),
  login: signin(client)
};

const user = {
  info: info(client)
};

const short = {
  generator: generator(client),
  getLinks: getLinks(client)
};

export { auth, user, short };
