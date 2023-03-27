import axios from "axios";

export const api = axios.create({
    baseURL: 'https://rocketnotes-vg1k.onrender.com'
});