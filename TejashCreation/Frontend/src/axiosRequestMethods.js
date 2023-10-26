import axios from "axios";

const BASE_URL = "http://localhost:4000";

function getAccessToken() {
    const storage = JSON.parse(localStorage.getItem("persist:root"));
    const currentUser = storage ? JSON.parse(storage.currentUser) : null;
    return currentUser ? currentUser?.accesstoken : null;
}

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
})

userRequest.interceptors.request.use((config) => {
    const newToken = getAccessToken();
    if (newToken) {
        config.headers.token = `Bearer ${newToken}`
    }
    return config;
})