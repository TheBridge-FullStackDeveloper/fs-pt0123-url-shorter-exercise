

import axios from 'axios'
import {login, registe} from "./auth"
import {info}from "./user"
import {url} from "./short"
const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})

const auth ={
 login: login(client),
 registe: registe(client),
 
}

const user = {
    info: info(client),
}

const short = {
    url: url(client)
}


export {auth, user, short};

