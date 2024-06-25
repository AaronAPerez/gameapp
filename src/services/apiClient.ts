import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '88682be5c94f45ec86a72c163e1a3a09'
    }
})