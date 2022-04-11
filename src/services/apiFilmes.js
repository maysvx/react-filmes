import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{
        'Authorization': '',
        'Content-type': 'application/json;charset=utf-8',
    }
})

export default apiFilmes