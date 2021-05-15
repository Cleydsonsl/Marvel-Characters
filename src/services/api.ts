import axios from 'axios';
import md5 from 'md5';

const publicKey = '39b297d5774985e008a562ad935148f8';
const privateKey = 'dd34ec33307f9f4bac8681525852363ac19128f6';

const time = Number(new Date()).toString();

const hash = publicKey && privateKey ? md5(time + privateKey + publicKey) : '';

export const authKey = `&ts=${time}&apikey=${publicKey}&hash=${hash}`;

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
});

export default api;
