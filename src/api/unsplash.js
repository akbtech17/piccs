// unsplash.js;
import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID CC58GwZdEhGnnK6zFzlAWOGYjsd7upLym0BtBk1zJ_w",
    },
});